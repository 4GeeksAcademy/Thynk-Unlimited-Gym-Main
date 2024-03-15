const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			memberships: [

				{
					id: 1,
					title: "Basic Membership",
					imageUrl: "https://i.pinimg.com/564x/04/0a/0d/040a0de68db8b473e368b870d258e700.jpg",
					description: " Access to all gym locations with standard amenities,  including discounted group fitness classes and equipment usage.",
					benefits: ["Access to all Thynk Unlimited Gym locations.", "Standard gym equipment and facilities", "Discounted rates on group fitness classes", "Access to basic amenities such as locker rooms and showers."],
					price: 29.99,
				  },
				  {
					id: 2,
					title: "Premium Membership",
					imageUrl: "https://i.pinimg.com/564x/d0/9b/ce/d09bce9b96b9f4ade416642865208217.jpg",
					description: "Enhanced access to exclusive workout areas, complimentary group classes, and personalized training plans.",
					benefits: ["All benefits of the Basic Membership.", "Access to exclusive workout areas.", "Complimentary access to group fitness classes.", 
					"Personalized workout plans from certified trainers.", "Discounted rates on personal training sessions."],
					price: 49.99,
				  }, 
				  {
					id: 3,
					title: "Elite Membership",
					imageUrl: "https://i.pinimg.com/564x/39/a6/1f/39a61ff36e9c4072761c35c1bf6a236c.jpg",
					description: "Ultimate access with priority facilities, exclusive amenities like sauna and swimming pool, plus VIP events and merchandise discounts.",
					benefits: ["All benefits of the Basic AND Premium Memberships.","Priority access to equipment and facilities during peak hours.", "Access to specialized amenities such as sauna, steam room, and swimming pool.", 
					"Complimentary towel service and amenities in locker rooms.", "Exclusive events and workshops with fitness experts.", 
					"Significant discounts on merchandise and supplements sold at the gym."],
					price: 79.99,
				  }
			]
		
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			getMessage: async () => {
				try{
					// fetching data from the backend
					const resp = await fetch(process.env.BACKEND_URL + "/api/hello")
					const data = await resp.json()
					setStore({ message: data.message })
					// don't forget to return something, that is how the async resolves
					return data;
				}catch(error){
					console.log("Error loading message from backend", error)
				}
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
