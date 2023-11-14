import Image from "next/image";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/lib/auth";
export default async function Home() {
  const session = await getServerSession(authOptions);

  return <div>hello {session?.user.username}</div>;
}
