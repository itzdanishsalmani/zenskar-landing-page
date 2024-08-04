export function SocSection() {
    return (
        <div>
            <div className="mt-12 grid grid-cols-12 px-16 flex flex-row items-center">
                <div className="col-span-3">
                    <div className="text-4xl font-bold">
                        SOC 2 and GDPR compliant: Secure your billing
                    </div>
                    <div className="mt-4 texl-lg">
                        We ensure the highest standards of confidentiality and integrity for your sensitive information
                    </div>
                </div>
                <div className="col-span-9">
                    <div className="flex items-center justify-evenly">
                       <div className="w-28"><img src="soc1.webp" alt="" /></div>
                       <div className="w-28"><img src="soc2.svg" alt="" /></div>
                       <div className="w-28"><img src="soc3.webp" alt="" /></div>
                       <div className="w-28"><img src="soc4.svg" alt="" /></div>
                    </div>
                </div>

            </div>
        </div>
    )
}