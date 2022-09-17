import Link from "next/link";
import Image from "next/image";
import { MdShoppingCart, MdStoreMallDirectory } from "react-icons/md";

const Navbar = () => {
  return (
    <div className="navbar bg-primary">
      <div className="flex-1 ml-2">
        <Link href="/">
          <a>
            <Image
              src="/ProSolar-logo.svg"
              alt="Logo image"
              width={50}
              height={50}
            />
          </a>
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal p-0">
          <li tabIndex={0}>
            <Link href="/butikk">
              <a>
                <MdStoreMallDirectory />
                Butikk
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                </svg>
              </a>
            </Link>

            <ul className="p-2 bg-base-100">
              <li>
                <Link href="/butikk/planlegger/steg-en">
                  <a>Solcelleplanlegger</a>
                </Link>
              </li>
              <li>
                <Link href="/butikk/alt-i-butikken">
                  <a>Se alt i butikken</a>
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link href="/om-oss">
              <a>Om oss</a>
            </Link>
          </li>
          <li>
            <Link href="/handlekurv">
              <button className="btn btn-ghost btn-circle text-lg">
                <div className="indicator">
                  <MdShoppingCart />
                  <span className="badge badge-xs badge-primary indicator-item opacity-25"></span>
                </div>
              </button>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
