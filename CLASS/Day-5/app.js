// Objects
let user = {
    name: "John",
    age: 30,
    email: "JgkZv@example.com",
    blogs: ["lorem upsum dolor sit amet sdf sf sdfsdfwatgdf retrwg vre fvcv"],
    location: "karachi",
    login: () => {
        console.log("user logged in");
    },
    logout: () => {
        console.log("user logged out");
    },
    logBlogs: () => {
        console.log(this.blogs);
    },
    blogs: [
        {
            post: "Hello, Good day",
            likes: 30
        },
        {
            post: "Hello, Good Night",
            likes: 30
        }
    ]
}
console.log(user);

// Math Object
console.log(Math.PI);
let area = 5.4429;
console.log(Math.round(area));
console.log(Math.floor(area));
console.log(Math.ceil(area));
console.log(Math.trunc(area));