import db from "@/lib/db";
import { PhotoIcon, XMarkIcon } from "@heroicons/react/24/solid";
import Button from "./Button";
import { notFound } from "next/navigation";

async function getProduct(id: number) {
  const product = await db.product.findUnique({
    where: {
      id,
    },
    include: {
      user: {
        select: { username: true, avatar: true },
      },
    },
  });

  return product;
}

export default async function Modal({ params }: { params: { id: string } }) {
  const { id } = await params;
  const pid = Number(id);
  if (isNaN(pid)) {
    return notFound();
  }

  const product = await getProduct(pid);
  if (!product) {
    return notFound();
  }

  // const product = await getProduct(id);
  // if (!product) {
  //   return notFound();
  // }
  return (
    <div className="absolute w-full h-full z-50 flex items-center justify-center bg-black bg-opacity-60 left-0 top-0">
      <Button className="absolute right-5 top-5">
        <XMarkIcon className="size-10" />
      </Button>
      <div className="max-w-screen-sm h-1/2  flex justify-center w-full">
        <div className="aspect-square  bg-neutral-700 text-neutral-200  rounded-md flex justify-center items-center">
          <PhotoIcon className="h-28" />
        </div>
      </div>
    </div>
  );
}
