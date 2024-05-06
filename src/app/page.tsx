
import styles from "./page.module.css";
import Header from "./components/Header";
import Card from "./components/Card";
import { PrismaClient ,Location, Region, PRICE} from "@prisma/client";


export interface ResturantCardType{
  id: number
  name:string
  main_image:string
  location:Location
  region:Region
  price:PRICE
  slug:string
}

const prisma = new PrismaClient();

const fetchRestrurants = async ():Promise<ResturantCardType[]> => {
  const restrutants = await prisma.restaurant.findMany({
    select:{
      id:true,
      name:true,
      main_image:true,
      region:true,
      location:true,
      price:true,
      slug:true
    }
  });
  return restrutants;
};
export default async function Home() {
  const restrutants = await fetchRestrurants();
  console.log(restrutants);

  return (
    <main className={styles.main}>
      <main>
        <Header />

        <div className="py-3 px-36 mt-10 flex flex-wrap justify-center">
          {restrutants.map((restrurant, key) => {
            return <Card key={key} restrurant={restrurant} />;
          })}
        </div>
      </main>
    </main>
  );
}
