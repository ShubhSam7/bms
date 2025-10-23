import { client } from "@repo/db/client";

export default async function Home(){
      const user = await client.user.findFirst({
        where: {
          username: "dheru"
        }
      });
      return (
      <div>
        <div>hi there</div>
        {user?.username}" "
        {user?.password}
      </div>
      )
}