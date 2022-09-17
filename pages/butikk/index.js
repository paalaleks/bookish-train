import Link from "next/link";
import Layout from "../../components/Layout";

const index = () => {
  return (
    <Layout>
      <main
        style={{
          height: "calc(100vh - 72px)",
        }}
      >
        <div className="bg-secondary min-h-[50%] flex justify-center items-center">
          <div className="max-w-2xl">
            <Link href="/butikk/planlegger">
              <a className="mb-5 text-4xl font-bold">
                Bruk solcelleplanleggeren
              </a>
            </Link>
          </div>
        </div>
        <div
          data-theme="mytheme"
          className="bg-tertiary min-h-[50%] flex justify-center items-center"
        >
          <div className="max-w-2xl">
            <Link href="/butikk/alt-i-butikken">
              <a className="mb-5 text-4xl font-bold">Se alt i butikken</a>
            </Link>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default index;
