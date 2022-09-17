import Layout from "../../../components/Layout";
import Link from "next/link";

const stegEn = () => {
  return (
    <Layout>
      <main
        style={{
          height: "calc(100vh - 72px)",
        }}
      >
        <div className="flex justify-center items-center mt-4">
          <ul className="steps">
            <li className="step step-primary">
              <Link href="/butikk/planlegger/steg-en">
                <a>
                  Antall <br /> moduler
                </a>
              </Link>
            </li>
            <li className="step">
              <Link href="/butikk/planlegger/steg-to">
                <a>
                  Modul <br /> type
                </a>
              </Link>
            </li>
            <li className="step">
              <Link href="/butikk/planlegger/steg-tre">
                <a>
                  Leverandør <br /> til fester
                </a>
              </Link>
            </li>
            <li className="step">
              <Link href="/butikk/planlegger/steg-fire">
                <a>
                  Din <br /> taktype
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </main>
    </Layout>
  );
};

export default stegEn;
