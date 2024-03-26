import HeaderCard from "@/components/common/HeaderCard";
import HeaderImageCard from "@/components/common/HeaderImageCard";
import IMG_JR_LUCUS from "../../assets/persons/prof_jr_lucus.png";
import IMG_J_MARS from "../../assets/persons/prof_json_mars.jpg";
import IMG_PLACEHOLDER from "../../assets/persons/placeholder.png";
import IMG_NALIN_W from "../../assets/persons/prof_nalin_wikramarachchi.jpg";

import IMG_RUWANTHIKA from "../../assets/persons/dr_ruwanthika.jpg";
import IMG_VIRAJ from "../../assets/persons/dr_viraj.jpeg";
import IMG_MANUJA from "../../assets/persons/dr_manuja.jpg";
import IMG_UPULI from "../../assets/persons/dr_upuli.jpg";
import IMG_HARSHA from "../../assets/persons/dr_harsha.jpg";
import IMG_RASARA from "../../assets/persons/dr_rasara.jpg";
import IMG_THUSHARA from "../../assets/persons/dr_thushara.jpg";
import IMG_LINDULA from "../../assets/persons/prof_lindula.jpg";
import IMG_MUDITH from "../../assets/persons/mr_mudith.jpeg";

export default function Committee() {
    return (
        <div className="w-full bg-white text-black bg-gray-100">
            <div
                className="w-full text-white p-4 pl-16 flex-col justify-center items-center h-72 "
                style={{
                    backgroundImage: "url(bg_02.jpg)",
                    backgroundSize: "cover", // Add this line
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
                        image={IMG_PLACEHOLDER}
                        name="Dr. Kasun Prasanga, Japan"
                    ></HeaderImageCard>
                </div>
            </div>
            <HeaderCard text={"Publicity Chairs"}></HeaderCard>
            <div className="flex flex-col sm:flex-row">
                <HeaderImageCard
                    image={IMG_UPULI}
                    name="Dr. Upuli Jayathunga, Australia"
                ></HeaderImageCard>
                <HeaderImageCard
                    image={IMG_HARSHA}
                    name="Dr. A.M.H.S. Abeykoon, USA"
                ></HeaderImageCard>
            </div>
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

            <HeaderCard text={"Conference Secretary"}></HeaderCard>
            <HeaderImageCard
                image={IMG_MUDITH}
                name="Mr. W. M. N. Witharana"
            ></HeaderImageCard>
            <HeaderCard text={"Awards Chair"}></HeaderCard>
            <HeaderImageCard
                image={IMG_LINDULA}
                name="Prof. L.N.W. Arachchige"
            ></HeaderImageCard>
        </div>
    );
}