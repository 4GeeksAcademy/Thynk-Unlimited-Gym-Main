import { data, error } from "jquery";

const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      members: [],
      token: null,
      memberships: [
        {
          id: 1,
          title: "Basic Membership",
          imageUrl:
            "https://i.pinimg.com/564x/04/0a/0d/040a0de68db8b473e368b870d258e700.jpg",
          description:
            " Access to all gym locations with standard amenities,  including discounted group fitness classes and equipment usage.",
          benefits: [
            "Access to all Thynk Unlimited Gym locations.",
            "Standard gym equipment and facilities",
            "Discounted rates on group fitness classes",
            "Access to basic amenities such as locker rooms and showers.",
          ],
          price: 29.99,
        },
        {
          id: 2,
          title: "Premium Membership",
          imageUrl:
            "https://i.pinimg.com/564x/d0/9b/ce/d09bce9b96b9f4ade416642865208217.jpg",
          description:
            "Enhanced access to exclusive workout areas, complimentary group classes, and personalized training plans.",
          benefits: [
            "All benefits of the Basic Membership.",
            "Access to exclusive workout areas.",
            "Complimentary access to group fitness classes.",
            "Personalized workout plans from certified trainers.",
            "Discounted rates on personal training sessions.",
          ],
          price: 49.99,
        },
        {
          id: 3,
          title: "Elite Membership",
          imageUrl:
            "https://i.pinimg.com/564x/39/a6/1f/39a61ff36e9c4072761c35c1bf6a236c.jpg",
          description:
            "Ultimate access with priority facilities, exclusive amenities like sauna and swimming pool, plus VIP events and merchandise discounts.",
          benefits: [
            "All benefits of the Basic AND Premium Memberships.",
            "Priority access to equipment and facilities during peak hours.",
            "Access to specialized amenities such as sauna, steam room, and swimming pool.",
            "Complimentary towel service and amenities in locker rooms.",
            "Exclusive events and workshops with fitness experts.",
            "Significant discounts on merchandise and supplements sold at the gym.",
          ],
          price: 79.99,
        },
      ],
      blogs: [],
    },
    actions: {
      // Use getActions to call a function within a fuction

      getUsers: async () => {
        const store = getStore();
        try {
          const resp = await fetch(process.env.BACKEND_URL + "/api/user", {
            headers: {
              Authorization: "Bearer " + store.token,
            },
          });
          const data = await resp.json();
          console.log(data, "this is from the user");
          setStore({ members: data });
          return data;
        } catch (error) {
          console.log("error loading user", error);
        }
      },

      syncSessionToken: () => {
        const token = sessionStorage.getItem("token");
        if (token && token !== "" && token !== undefined) {
          setStore({ token: token });
        }
      },

      login: async (email, password) => {
        const options = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            password: password,
          }),
        };
        try {
          const response = await fetch(
            process.env.BACKEND_URL + "/api/token",
            options
          );
          if (response.status !== 200) {
            alert("error response code ", response.status);
            return false;
          }
          const data = await response.json();
          console.log("access token ", data);
          sessionStorage.setItem("token", data.access_token);
          console.log("Token data:", data.access_token);
          setStore({ token: data.access_token });
          console.log("Store token after update:", getStore().token);

          return true;
        } catch (error) {
          console.log("login error");
        }
      },

      logout: () => {
        sessionStorage.removeItem("token");
        console.log("You are logged out");
        setStore({ token: null });
      },

      addUser: async (email, password) => {
        const options = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            password: password,
          }),
        };
        try {
          const response = await fetch(
            process.env.BACKEND_URL + "/api/signup",
            options
          );
          if (response.status !== 200) {
            alert("Error response code ", response.status);
            return false;
          }
          const data = await response.json();
          console.log("from the backend", data);
          return true;
        } catch (error) {
          console.log("login error");
          console.log("Error:", error.message);
        }
      },
      getBlogs: async () => {
        const store = getStore();
        const blogs = getStore().blogs;
        const options = {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Headers" : "Content-Type",
              "Access-Control-Allow-Origin": "*",
            'Content-Type': 'application/json',
             "Access-Control-Allow-Methods": "OPTIONS,POST,GET,PATCH"
          },
          mode: "cors"
        };
        const resp = await fetch(`${process.env.BACKEND_URL}api/blogs`, options);
        const data = await resp.json();
        console.log("Get blog raw data: ", data);
        setStore({ blogs: data });
      },
    },
  };
};

export default getState;
