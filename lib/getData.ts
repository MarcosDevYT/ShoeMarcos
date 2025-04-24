import prisma from "./db";
import { notFound } from "next/navigation";

//
//
//
// get data for the dashboard pages
//
//
//

// Obtener la informacion de los usuarios, productos y ordenes
export async function getUserDataStats() {
  const [user, products, order] = await Promise.all([
    prisma.user.findMany({
      select: {
        id: true,
      },
    }),
    prisma.product.findMany({
      select: {
        id: true,
      },
    }),
    prisma.order.findMany({
      select: {
        amount: true,
      },
    }),
  ]);

  return {
    user,
    products,
    order,
  };
}

// Obtener ventas recientes
export async function getRecentSales() {
  const data = await prisma.order.findMany({
    select: {
      amount: true,
      id: true,
      User: {
        select: {
          firstName: true,
          email: true,
          profileImage: true,
        },
      },
    },
    orderBy: {
      createdAt: "desc",
    },
    take: 7,
  });

  return data;
}

// Obtener las transacciones de los ultimos 7 dias
export async function getTransactionsData() {
  const now = new Date();
  const sevenDaysAgo = new Date();

  sevenDaysAgo.setDate(now.getDate() - 7);

  const data = await prisma.order.findMany({
    where: {
      createdAt: {
        gte: sevenDaysAgo,
      },
    },
    select: {
      amount: true,
      createdAt: true,
    },
    orderBy: {
      createdAt: "asc",
    },
  });

  const result = data.map((item) => ({
    date: new Intl.DateTimeFormat("en-US").format(item.createdAt),
    revenue: item.amount / 100,
  }));

  return result;
}

// Obtener la informacion de los productos
export async function getProductsData() {
  const data = await prisma.product.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return data;
}

// Obtener la informacion del producto con el ID
export async function getProductEditData(productId: string) {
  const data = await prisma.product.findUnique({
    where: {
      id: productId,
    },
  });

  if (!data) {
    return notFound();
  }

  return data;
}

// Obtener todos los banners
export async function getBannerData() {
  const data = await prisma.banner.findMany({
    orderBy: { createdAt: "desc" },
  });

  return data;
}

// Obtener la informacion del banner con el ID para eliminar
export async function getDeleteData(id: string) {
  const data = await prisma.banner.findMany({
    where: { id: id },
  });

  return data;
}

// Obtener las ordenes de los clientes
export async function getOrdersData() {
  const data = await prisma.order.findMany({
    select: {
      amount: true,
      createdAt: true,
      status: true,
      id: true,
      User: {
        select: {
          firstName: true,
          email: true,
          profileImage: true,
        },
      },
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return data;
}

//
//
//
// get Data for the store pages
//
//
//

export async function getHeroData() {
  const data = await prisma.banner.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return data;
}

export async function getFeaturedData() {
  const data = await prisma.product.findMany({
    where: {
      isFeatured: true,
      status: "published",
    },
    select: {
      id: true,
      name: true,
      description: true,
      images: true,
      price: true,
    },
    orderBy: {
      createdAt: "desc",
    },
    take: 3,
  });

  return data;
}

// Obtener la informacion del producto con el ID para la pagina de producto
export async function getStoreProductData({
  productId,
}: {
  productId: string;
}) {
  const data = await prisma.product.findUnique({
    where: {
      id: productId,
    },
    select: {
      price: true,
      name: true,
      description: true,
      images: true,
      id: true,
    },
  });

  if (!data) {
    return notFound();
  }

  return data;
}

// Obtener la informacion de las categorias
export async function getCategoriesData(productCategory: string) {
  switch (productCategory) {
    case "all": {
      const data = await prisma.product.findMany({
        select: {
          name: true,
          images: true,
          price: true,
          id: true,
          description: true,
        },
        where: {
          status: "published",
        },
      });

      return {
        title: "All Products",
        data: data,
      };
    }
    case "men": {
      const data = await prisma.product.findMany({
        select: {
          name: true,
          images: true,
          price: true,
          id: true,
          description: true,
        },
        where: {
          status: "published",
          category: "men",
        },
      });

      return {
        title: "Products for Men",
        data: data,
      };
    }
    case "women": {
      const data = await prisma.product.findMany({
        select: {
          name: true,
          images: true,
          price: true,
          id: true,
          description: true,
        },
        where: {
          status: "published",
          category: "women",
        },
      });

      return {
        title: "Products for Women",
        data: data,
      };
    }
    case "kids": {
      const data = await prisma.product.findMany({
        select: {
          name: true,
          images: true,
          price: true,
          id: true,
          description: true,
        },
        where: {
          status: "published",
          category: "kids",
        },
      });

      return {
        title: "Products for Kids",
        data: data,
      };
    }
    default: {
      return notFound();
    }
  }
}
