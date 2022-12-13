import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <>
      <header className="header">
        <nav>
          <div className="display-flex">
            <div>
              <Link href="/">
                <Image src="/images/cinema.png" width="32" height="32" alt="logo"/>
              </Link>
            </div>
            <div>
              <ul>
                <li>
                  <Link href="/">Popular</Link>
                </li>
                <li>
                  <Link href="/nowplaying">Now Playing</Link>
                </li>
                <li>
                  <Link href="/top">Top Rated</Link>
                </li>
                <li>
                  <Link href="/upcoming">Upcoming</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      <style jsx>{`
        .header {
          width:100%;
          height: 60px;
          background-color: #14181c;
          color: #fff;
          display: flex;
          align-items: center;

          nav {
            width: 1200px;
            margin: 0 auto;

            .display-flex {
              display: flex;
              justify-content: space-between;
              align-items: center;
              padding-right:20px;
            }

            ul {
              display: flex;
              list-style-type: none;
              padding-inline-start: 0 !important;

              li {
                margin-right: 10px;
                display: flex;
                align-items: center;
              }
            }
          }
        }
      `}</style>
    </>
  );
};

export default Header;
