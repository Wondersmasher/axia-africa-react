import { useEffect, useState } from "react";
import { api } from "../../utils";

type Props = {};

const Axios = ({}: Props) => {
  const [products, setProducts] = useState<ProductResponse[]>([]);
  const [users, setUsers] = useState<User[]>([]);

  const getSingleProduct = async (index: number) => {
    try {
      const response = await api.get(`/products/${index}`);
      console.log(response.data, "response from async");
    } catch (err) {
      console.log(err);
    }
  };
  const getSingleUser = async (index: number) => {
    try {
      const response = await api.get(`/users/${index}`);
      console.log(response.data, "response from async");
    } catch (err) {
      console.log(err);
    }
  };
  const createUser = async () => {
    try {
      const response = await api.post(`/users/`, {
        name: "Akinniyi Ezekiel Wonderful",
        email: "testing@gmail.com",
        password: "1234567890",
        avatar: "https://picsum.photos/800",
      });
      console.log(response.data, "response from async");
    } catch (err) {
      console.log(err);
    }
  };
  const updateUser = async () => {
    try {
      const response = await api.put<{ isAvailable: boolean }>(`/users/55`, {
        name: "Akinniyi Ezekiel",
        email: "testing@gmail.com",
      });
      console.log(response.data.isAvailable, "response from async");
    } catch (err) {
      console.log(err);
    }
  };

  const isUserAvailable = async (email: string) => {
    try {
      const response = await api.post(
        `/users/is-available
`,
        {
          email,
        }
      );
      console.log(response.data, "is user available");
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    // fetch
    // const fetcherWithFetch = () => {
    //   try {
    //     fetch(url)
    //       .then((res) => res.json())
    //       .then((data) => console.log(data));
    //   } catch (error) {
    //     console.error(error);
    //   }
    // };

    const getAllProducts = () => {
      api
        .get(
          "/products"
          //   {
          //   params: { title: "Generic", limit: 10, page: 1, offset: "30" },
          // }
        )
        .then(function (response) {
          // handle success
          // console.log("response from axios");
          // console.log(response.data);
          setProducts(response.data);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .finally(function () {
          // always executed
        });
    };
    const getAllUsers = async () => {
      try {
        const { data } = await api("/users");
        setUsers(data);
      } catch (err) {
        console.log(err);
      }
    };

    // fetcherWithFetch();
    getAllProducts();
    getAllUsers();
  }, []);

  console.log(products, "products");

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <button onClick={createUser}>Create User</button>
      <button onClick={updateUser}>Update user</button>
      <p>Users</p>
      {users.map((user, index) => (
        <p
          key={index}
          onClick={() => {
            getSingleUser(index);
            isUserAvailable(user.email);
          }}
          style={{ cursor: "pointer" }}
        >
          {user.name}
        </p>
      ))}
      <p>Products</p>
      {products.map((product, index) => (
        <p
          key={product.id}
          onClick={() => {
            getSingleProduct(index);
          }}
          style={{ cursor: "pointer" }}
        >
          {product.title}
        </p>
      ))}
    </div>
  );
};

export { Axios };

type ProductResponse = {
  id: number;
  title: string;
  slug: string;
  price: number;
  description: string;
  category: {
    id: number;
    name: string;
    slug: string;
    image: string;
    creationAt: string; // ISO date string
    updatedAt: string; // ISO date string
  };
  images: string[];
  creationAt: string;
  updatedAt: string;
};

type User = {
  id: number;
  email: string;
  password: string; // consider omitting or hashing on backend
  name: string;
  role: "customer" | "admin" | string; // refine if API has fixed roles
  avatar: string;
  creationAt: string; // ISO timestamp
  updatedAt: string; // ISO timestamp
};
