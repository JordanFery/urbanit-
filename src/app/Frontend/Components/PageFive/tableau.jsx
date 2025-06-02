


export default function Tableau() {

    return (
        <section className="bg-[var(--color-bg2)] text-[var(--color-font)] grid grid-cols-4 py-12 scroll-mt-14">
            <div className="flex col-start-1 md:col-start-2 col-span-4 md:col-span-2 justify-center">

                <table className="whitespace-nowrap">
                    <thead>
                        <tr>
                            <th className="md:px-24 px-4 pb-6 border-b border-[var(--color-font)]">Type de bien</th>
                            <th className="md:px-24 px-4 pb-6 border-b border-[var(--color-font)]">Extérieur</th>
                            <th className="md:px-24 px-4 pb-6 border-b border-[var(--color-font)]">Prix</th>
                        </tr>
                    </thead>
                    <tbody className="text-center">
                        <tr>
                            <td className="md:px-24 px-4 py-6 border-b border-[var(--color-font)]">T3</td>
                            <td className="md:px-24 px-4 border-b border-[var(--color-font)]">OUI</td>
                            <td className="md:px-24 px-4 border-b border-[var(--color-font)]">212 000 €</td>
                        </tr>
                        <tr>
                            <td className="md:px-24 px-4 py-6 border-b border-[var(--color-font)]">T4</td>
                            <td className="md:px-24 px-4 border-b border-[var(--color-font)]">OUI</td>
                            <td className="md:px-24 px-4 border-b border-[var(--color-font)]">258 000 €</td>
                        </tr>
                        <tr>
                            <td className="md:px-24 px-4 py-6 border-b border-[var(--color-font)]">T5</td>
                            <td className="md:px-24 px-4 border-b border-[var(--color-font)]">OUI</td>
                            <td className="md:px-24 px-4 border-b border-[var(--color-font)]">277 000 €</td>
                        </tr>

                    </tbody>
                </table>

            </div>


        </section>
    )
}