"use client"

import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { useState } from "react"
import emailjs from "@emailjs/browser"
import { FormSend } from "./contactSend"

const formSchema = z.object({
    username: z.string().min(2, "Le nom d'utilisateur doit avoir au moins 2 caractères").max(50, "Le nom d'utilisateur est trop long"),
    name: z.string().min(2, "Le nom d'utilisateur doit avoir au moins 2 caractères").max(50, "Le nom d'utilisateur est trop long"),
    telephone: z.string().regex(/^\d{10}$/, "Le numéro de téléphone doit contenir exactement 10 chiffres"),
    message: z.string().min(2, "Le nom d'utilisateur doit avoir au moins 2 caractères").max(50, "Le nom d'utilisateur est trop long"),
    email: z.string().email("Adresse email invalide").min(2, "L'email doit avoir au moins 2 caractères").max(50, "L'email est trop long"),
    newsletter: z.boolean().optional(),
    dataUsage: z.boolean().optional(),
})

export function Contact() {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isFormSubmitted, setIsFormSubmitted] = useState(false)
    const [submitError, setSubmitError] = useState("")

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
            name: "",
            telephone: "",
            message: "",
            email: ""
        },
    })

    const onSubmit = async (data) => {
        setIsSubmitting(true)
        setSubmitError("")

        const templateParams = {
            to_name: 'Jordan',
            from_name: data.username,
            from_lastname: data.name,
            message: data.message,
            email: data.email,
            telephone: data.telephone,
            newsletter: data.newsletter ? "Oui" : "Non",
            dataUsage: data.dataUsage ? "Oui" : "Non",
        }

        try {
            await emailjs.send(
                process.env.NEXT_PUBLIC_SERVICE_ID,
                process.env.NEXT_PUBLIC_TEMPLATE_ID,
                templateParams,
                process.env.NEXT_PUBLIC_EMAILJS_KEY
            )
            setIsFormSubmitted(true) // Mise à jour de l'état pour afficher FormSend
            setTimeout(() => {
                window.location.replace("home")
            }, 4000)
            console.log('Email envoyé avec succès')
        } catch (error) {
            console.error("Erreur lors de l'envoi de l'email", error)
            setSubmitError("Échec de l'envoi de l'email. Veuillez réessayer.")
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <section className="bg-[var(--color-bg2)]">
            <div className="flex justify-center  items-center mx-10 md:mx-0">
                {isFormSubmitted ? (
                    <FormSend /> // Affiche FormSend si le formulaire a été soumis avec succès
                ) : (
                    <div className="w-[500px]">
                        <h1 className="text-[var(--color-title)] font-semibold md:text-5xl text-3xl mr-auto mt-32 pb-12">Contactez-nous</h1>
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="">
                                <div className="mb-6">
                                    <FormField
                                        control={form.control}
                                        name="name"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Nom</FormLabel>
                                                <FormControl className="bg-[var(--color-fontHover)]">
                                                    <Input placeholder="" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                                <div className="mb-6">
                                    <FormField
                                        control={form.control}
                                        name="username"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Prénom</FormLabel>
                                                <FormControl className="bg-[var(--color-fontHover)]">
                                                    <Input placeholder="" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                                <div className="mb-6">
                                    <FormField
                                        control={form.control}
                                        name="email"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Email</FormLabel>
                                                <FormControl className="bg-[var(--color-fontHover)]">
                                                    <Input placeholder="" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                                <div className="mb-6">
                                    <FormField
                                        control={form.control}
                                        name="telephone"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Téléphone</FormLabel>
                                                <FormControl className="bg-[var(--color-fontHover)]">
                                                    <Input placeholder="" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                                <div className="mb-6">
                                    <FormField
                                        control={form.control}
                                        name="message"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Votre message</FormLabel>
                                                <FormControl>
                                                    <textarea
                                                        className="rounded-md bg-[var(--color-fontHover)] text-black w-full h-56 resize-none mb-4"
                                                        placeholder=""
                                                        {...field}
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="newsletter"
                                        render={({ field }) => (
                                            <FormItem className="flex items-center space-x-2">
                                                <FormControl>
                                                    <input type="checkbox" {...field} checked={field.value} />
                                                </FormControl>
                                                <FormLabel className="text-sm font-thin">Inscription à la Newsletter</FormLabel>
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="dataUsage"
                                        render={({ field }) => (
                                            <FormItem className="flex items-center space-x-2">
                                                <FormControl>
                                                    <input type="checkbox" {...field} checked={field.value} />
                                                </FormControl>
                                                <FormLabel className="text-sm">Utilisation de mes données</FormLabel>
                                            </FormItem>
                                        )}
                                    />

                                </div>

                                {submitError && <p className="text-red-500">{submitError}</p>}
                                <div className="mt-8 flex justify-center pb-20">
                                    <Button type="submit" className="bg-[var(--color-title)] hover:bg-[var(--color-buttonHover)] text-[var(--color-fontHover)] hover:text-[var(--color-fontHover)]" disabled={isSubmitting}>
                                        {isSubmitting ? "Envoi..." : "Envoyer"}
                                    </Button>
                                </div>
                            </form>
                        </Form>
                    </div>
                )}

            </div>
        </section>
    )
}
