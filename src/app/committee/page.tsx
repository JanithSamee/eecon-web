import HeaderCard from "@/components/common/HeaderCard";
import HeaderImageCard from "@/components/common/HeaderImageCard";
import IMG_JR_LUCUS from "../../assets/persons/prof_jr_lucus.jpg";
import IMG_J_MARS from "../../assets/persons/prof_json_mars.jpg";
import IMG_PLACEHOLDER from "../../assets/persons/placeholder.jpg";
import IMG_NALIN_W from "../../assets/persons/prof_nalin_wikramarachchi.jpg";
import IMG_KASUN from "../../assets/persons/dr_kasun.jpg";

import IMG_RUWANTHIKA from "../../assets/persons/dr_ruwanthika.jpg";
import IMG_VIRAJ from "../../assets/persons/dr_viraj.jpg";
import IMG_MANUJA from "../../assets/persons/dr_manuja.jpg";
import IMG_UPULI from "../../assets/persons/dr_upuli.jpg";
import IMG_HARSHA from "../../assets/persons/dr_harsha.jpg";
import IMG_RASARA from "../../assets/persons/dr_rasara.jpg";
import IMG_THUSHARA from "../../assets/persons/dr_thushara.jpg";
import IMG_LINDULA from "../../assets/persons/prof_lindula.jpg";
import IMG_MUDITH from "../../assets/persons/mr_mudith.jpg";
import IMG_ABEYGUNAWARDANE from "../../assets/persons/dr_abeygunawardane.jpg";
import IMG_LOGEESHAN from "../../assets/persons/dr_logeeshan.jpg";
import IMG_AKILA from "../../assets/persons/dr_akila_wijethunga.jpg";
import IMG_BUDDHIKA from "../../assets/persons/prof_buddika_jayasekara.jpg";

import IMG_CHAPA from "../../assets/persons/dr_chapa.jpg";
import IMG_PRASAD from "../../assets/persons/dr_prasad.jpg";
import IMG_RANJITH from "../../assets/persons/dr_ranjith.jpg";
import IMG_DINITHI from "../../assets/persons/ms_dinithi.jpg";
import IMG_ASANKA from "../../assets/persons/prof_asanka.jpg";
import IMG_ATHULA from "../../assets/persons/prof_athula.jpg";
import IMG_CHANDIMA from "../../assets/persons/prof_chandima.jpg";
import IMG_KARUNADASA from "../../assets/persons/prof_karunadasa.jpg";

export default function Committee() {
    return (
        <div className="w-full bg-white text-black bg-gray-100">
            <div
                className="w-full text-white p-4 pl-16 flex-col justify-center items-center h-72 "
                style={{
                    backgroundImage: "url(bg/bg_h_01.jpg)",
                    backgroundSize: "cover",
                }}
            >
                <div className="pt-36 left-1/6  text-start">
                    <h1 className="text-4xl sm:text-6xl font-bold text-transform: uppercase">
                        Committee
                    </h1>
                </div>
            </div>

            <HeaderCard text={"Honorary Chair"}></HeaderCard>

            <HeaderImageCard
                image={IMG_JR_LUCUS}
                name="Prof. J.R. Lucas"
            ></HeaderImageCard>

            <HeaderCard text={"General Chairs"}></HeaderCard>
            <div className="flex flex-col sm:flex-row">
                <HeaderImageCard
                    image={IMG_NALIN_W}
                    name="Prof. N.K. Wickramarachchi"
                ></HeaderImageCard>
                <HeaderImageCard
                    image={IMG_J_MARS}
                    name="Prof. Jason Mars, USA"
                ></HeaderImageCard>
            </div>
            <div className="flex flex-col sm:flex-row">
                <div className="basis-1/2">
                    <HeaderCard text={"Program Chair"}></HeaderCard>

                    <HeaderImageCard
                        image={IMG_RUWANTHIKA}
                        name="Dr. R.M.M. Ruwanthika"
                    ></HeaderImageCard>
                </div>
                <div className="basis-1/2">
                    <HeaderCard text={"Program Co-Chair"}></HeaderCard>
                    <HeaderImageCard
                        image={IMG_VIRAJ}
                        name="Dr. Viraj Muthugala, Singapore"
                    ></HeaderImageCard>
                </div>
            </div>
            <div className="flex flex-col sm:flex-row">
                <div className="basis-1/2">
                    <HeaderCard text={"Publication Chair"}></HeaderCard>
                    <HeaderImageCard
                        image={IMG_MANUJA}
                        name="Dr. S.D.M.S. Gunawardana"
                    ></HeaderImageCard>
                </div>
                <div className="basis-1/2">
                    <HeaderCard text={"Publication Co-Chair"}></HeaderCard>
                    <HeaderImageCard
                        image={IMG_KASUN}
                        name="Dr. Kasun Prasanga, Japan"
                    ></HeaderImageCard>
                </div>
            </div>
            <HeaderCard text={"Publicity Chairs"}></HeaderCard>
            <div className="flex flex-col sm:flex-row lg:flex hidden">
                <HeaderImageCard
                    image={IMG_UPULI}
                    name="Dr. Upuli Jayathunga, Australia"
                ></HeaderImageCard>
                <HeaderImageCard
                    image={IMG_HARSHA}
                    name="Dr. A.M.H.S. Abeykoon, USA"
                ></HeaderImageCard>
                <HeaderImageCard
                    image={IMG_ABEYGUNAWARDANE}
                    name="Dr. S.K. Abeygunawardane, USA"
                ></HeaderImageCard>
            </div>
            <div className="flex flex-col sm:flex-row lg:hidden flex">
                <HeaderImageCard
                    image={IMG_UPULI}
                    name="Dr. Upuli Jayathunga, Australia"
                ></HeaderImageCard>
                <HeaderImageCard
                    image={IMG_HARSHA}
                    name="Dr. A.M.H.S. Abeykoon, USA"
                ></HeaderImageCard>
            </div>
            <div className="lg:hidden flex">
                <HeaderImageCard
                    image={IMG_ABEYGUNAWARDANE}
                    name="Dr. S.K. Abeygunawardane, USA"
                ></HeaderImageCard>
            </div>

            <HeaderCard text={"Registration/Financial Chair"}></HeaderCard>

            <HeaderImageCard
                image={IMG_LOGEESHAN}
                name="Dr. L. Velmanickam "
            ></HeaderImageCard>
            <div className="flex flex-col sm:flex-row">
                <div className="basis-1/2">
                    <HeaderCard text={"Local Organizing Chair"}></HeaderCard>

                    <HeaderImageCard
                        image={IMG_RASARA}
                        name="Dr. R. Samarasinghe"
                    ></HeaderImageCard>
                </div>
                <div className="basis-1/2">
                    <HeaderCard text={"Local Organizing Co-Chair"}></HeaderCard>
                    <HeaderImageCard
                        image={IMG_THUSHARA}
                        name="Dr. R.M.T. Damayanthi"
                    ></HeaderImageCard>
                </div>
            </div>

            <HeaderCard text={"Awards Chair"}></HeaderCard>
            <HeaderImageCard
                image={IMG_LINDULA}
                name="Prof. L.N.W. Arachchige"
            ></HeaderImageCard>
            <HeaderCard text={"Track Chairs"}></HeaderCard>

            <div className="bg-white w-max flex mt-4 ml-16 ">
                <div className="flex-none p-1 text-white bg-blue-950 w-[100px]"></div>
                <div className="flex-1 p-1 text-black text-left border-b-2 border-blue-950">
                    <p className=" text-medium text-lg">{"Power Systems"}</p>
                </div>
            </div>
            <div className="flex flex-col sm:flex-row sm:ml-24 ml-4">
                <div className="basis-1/2">
                    <HeaderImageCard
                        image={IMG_PRASAD}
                        name="Dr. W.D. Prasad"
                        subtitle="University of Moratuwa, Sri Lanka"
                    ></HeaderImageCard>
                </div>
                <div className="basis-1/2">
                    <HeaderImageCard
                        image={IMG_ATHULA}
                        name="Prof. Athula Rajapakse"
                        subtitle="University of Manitoba, Canada"
                    ></HeaderImageCard>
                </div>
            </div>

            <div className="bg-white sm:w-max w-min flex mt-4 ml-16 ">
                <div className="flex-none p-1 text-white bg-blue-950 w-[100px]"></div>
                <div className="flex-1 p-1 text-black text-left border-b-2 border-blue-950">
                    <p className=" text-medium text-lg">
                        {"Power Electronics and Applications"}
                    </p>
                </div>
            </div>
            <div className="flex flex-col sm:flex-row sm:ml-24 ml-4">
                <div className="lg:basis-1/3 basis-1/2">
                    <HeaderImageCard
                        image={IMG_CHANDIMA}
                        name="Prof. D. P. Chandima"
                        subtitle="University of Moratuwa, Sri Lanka"
                    ></HeaderImageCard>
                </div>
                <div className="lg:basis-1/3 basis-1/2">
                    <HeaderImageCard
                        image={IMG_KARUNADASA}
                        name="Prof. J. P. Karunadasa"
                        subtitle="University of Moratuwa, Sri Lanka"
                    ></HeaderImageCard>
                </div>
                <div className="lg:basis-1/3 basis-1/2 lg:flex hidden">
                    <HeaderImageCard
                        image={IMG_RANJITH}
                        name="Dr. Ranjith Liyanapathirana"
                        subtitle="Western Sydney University, Australia"
                    ></HeaderImageCard>
                </div>
            </div>
            <div className="flex flex-col sm:flex-row sm:ml-24 ml-4 lg:hidden flex">
                <HeaderImageCard
                    image={IMG_RANJITH}
                    name="Dr. Ranjith Liyanapathirana"
                    subtitle="Western Sydney University, Australia"
                ></HeaderImageCard>
            </div>
            <div className="bg-white sm:w-max w-min flex mt-4 ml-16 ">
                <div className="flex-none p-1 text-white bg-blue-950 w-[100px]"></div>
                <div className="flex-1 p-1 text-black text-left border-b-2 border-blue-950">
                    <p className=" text-medium text-lg">
                        {"Energy Systems and Smart Technologies"}
                    </p>
                </div>
            </div>
            <div className="flex flex-col sm:flex-row sm:ml-24 ml-4">
                <div className="basis-1/2">
                    <HeaderImageCard
                        image={IMG_ASANKA}
                        name="Prof. W. D. Asanka S. Rodrigo"
                        subtitle="University of Moratuwa, Sri Lanka"
                    ></HeaderImageCard>
                </div>
                <div className="basis-1/2">
                    <HeaderImageCard
                        image={IMG_AKILA}
                        name="Dr. Akila Wijethunge"
                        subtitle="University of Sri Jayawardhanapura, Sri Lanka"
                    ></HeaderImageCard>
                </div>
            </div>

            <div className="bg-white sm:w-max w-min flex mt-4 ml-16 ">
                <div className="flex-none p-1 text-white bg-blue-950 w-[100px]"></div>
                <div className="flex-1 p-1 text-black text-left border-b-2 border-blue-950">
                    <p className=" text-medium text-lg">
                        {"Robotics and Intelligent Systems"}
                    </p>
                </div>
            </div>
            <div className="flex flex-col sm:flex-row sm:ml-24 ml-4">
                <div className="lg:basis-1/3 basis-1/2">
                    <HeaderImageCard
                        image={IMG_BUDDHIKA}
                        name="Prof. Buddhika Jayasekara"
                        subtitle="University of Moratuwa, Sri Lanka"
                    ></HeaderImageCard>
                </div>
                <div className="lg:basis-1/3 basis-1/2">
                    <HeaderImageCard
                        image={IMG_HARSHA}
                        name="Prof. A. M. H. S. Abeykoon"
                        subtitle="Plymouth State University, USA"
                    ></HeaderImageCard>
                </div>
                <div className="lg:basis-1/3 basis-1/2 lg:flex hidden">
                    <HeaderImageCard
                        image={IMG_CHAPA}
                        name="Dr. Chapa Sirithunge"
                        subtitle="Cambridge University, UK"
                    ></HeaderImageCard>
                </div>
            </div>
            <div className="flex flex-col sm:flex-row sm:ml-24 ml-4 lg:hidden flex">
                <HeaderImageCard
                    image={IMG_CHAPA}
                    name="Dr. Chapa Sirithunge"
                    subtitle="Cambridge University, UK"
                ></HeaderImageCard>
            </div>

            <HeaderCard text={"Conference Secretary"}></HeaderCard>
            <div className="flex flex-col sm:flex-row">
                <HeaderImageCard
                    image={IMG_MUDITH}
                    name="Mr. W. M. N. Witharana"
                ></HeaderImageCard>
                <HeaderImageCard
                    image={IMG_DINITHI}
                    name="Ms. Dinithi Senarath"
                ></HeaderImageCard>
            </div>
        </div>
    );
}
