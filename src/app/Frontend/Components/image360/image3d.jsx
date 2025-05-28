export default function Virtuel() {
    return (
        <div className="overflow-hidden w-full h-[400px] md:h-[600px] relative">
            <iframe
                src="http://www.chokoprod.com/urba/"
                title="Visite virtuelle 360°"
                // className="w-full h-full border-0"
                className="w-full h-[600px] md:h-[700px] scale-150  -translate-y-[100px] md:scale-100 md:translate-y-0"

                allowFullScreen
            ></iframe>
        </div>
    );
}



