import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
<Link href={"/"}><Image src='/public/emul-app.png' alt='emul-app' /></Link>
<Link href={"/"}><Image src='/public/emul-cp.png' alt='emul-cp' /></Link>
<Link href={"/"}><Image src='/public/emul-m.png' alt='emul-M' /></Link>
<Link href={"/"}><Image src='/public/arche.png' alt='arche' /></Link>

        </div>
  );
}
/*model Comment {
  id        Int      @id @default(autoincrement())
  content   String
  createdAt DateTime @default(now())
 }

 model Progres {
  id          Int       @id @default(autoincrement())
  nbWord      String
  createdAt DateTime @default(now())
 }
  */
/*

         echo "# fm-next" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/giblimdev/fm-next.git
git push -u origin main
*/

