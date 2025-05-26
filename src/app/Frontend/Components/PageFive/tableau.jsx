


export default function Tableau() {

    return (
        <section id='tarif' className="bg-[var(--color-bg2)] text-[var(--color-font)] w-full py-12">
            <div className="flex justify-center">

                <table>
                    <thead >
                        <tr>
                            <th className="px-24 pb-6 border-b border-[var(--color-font)]">Type de bien</th>
                            <th className="px-24 pb-6 border-b border-[var(--color-font)]">Extérieur</th>
                            <th className="px-24 pb-6 border-b border-[var(--color-font)]">Prix</th>
                        </tr>
                    </thead>
                    <tbody className="text-center">
                        <tr>
                            <td className="px-24 py-6 border-b border-[var(--color-font)]">T3</td>
                            <td className="px-24 border-b border-[var(--color-font)]">OUI</td>
                            <td className="px-24 border-b border-[var(--color-font)]">212 000 €</td>
                        </tr>
                        <tr>
                            <td className="px-24 py-6 border-b border-[var(--color-font)]">T4</td>
                            <td className="px-24 border-b border-[var(--color-font)]">OUI</td>
                            <td className="px-24 border-b border-[var(--color-font)]">258 000 €</td>
                        </tr>
                        <tr>
                            <td className="px-24 py-6 border-b border-[var(--color-font)]">T5</td>
                            <td className="px-24 border-b border-[var(--color-font)]">OUI</td>
                            <td className="px-24 border-b border-[var(--color-font)]">277 000 €</td>
                        </tr>

                    </tbody>
                </table>

            </div>


        </section>
    )
}