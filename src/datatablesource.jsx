// temporary user data

export const userColumns = [
{ field: 'id', headerName: 'ID', width: 70 },
{ field: "user", headerName: "User", width: 230,
    renderCell: (params) => {
        return(
            <div className="cellWithImg">
                <img className="cellImg" src={params.row.img} alt="avatar"/>
                {params.row.username}
            </div>
        )
    }
    },
{ field: 'email', headerName: 'Email', width: 230 },
{ field: 'age', headerName: 'Age', width: 100 },
{ field: 'status', headerName: 'Status', width: 160,
    renderCell: (params) => {
        return(
            <div className={`cellWithStatus ${params.row.status}`}>
                {params.row.status}
            </div>
        )
    }
},

];

export const userRows = [
        {
            id: 1,
            username: "Mary Jane",
            img: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1600",
            email: "maryjane@gmail.com",
            status: "active",
            age: 90,
        },
        {
            id: 2,
            username: "Paul Daniel",
            img: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1600",
            email: "pauldaniel@gmail.com",
            status: "pending",
            age: 33,
        },
        {
            id: 3,
            username: "Andrea Pic",
            img: "https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=1600",
            email: "andreapic@gmail.com",
            status: "passive",
            age: 54,
        },
        {
            id: 4,
            username: "Steven Stef",
            img: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1600",
            email: "stevenstef@gmail.com",
            status: "pending",
            age: 22,
        },
        {
            id: 5,
            username: "Simon Robenn",
            img: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1600",
            email: "simonrobenn@gmail.com",
            status: "active",
            age: 45,
        },
        {
            id: 6,
            username: "Hannah Nelson",
            img: "https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=1600",
            email: "hannahnelson@gmail.com",
            status: "pending",
            age: 45,
        },
        {
            id: 7,
            username: "Creation Hill",
            img: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1600",
            email: "creationhill@gmail.com",
            status: "passive",
            age: 45,
        },
        {
            id: 8,
            username: "Christina Morillo",
            img: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1600",
            email: "christinamorillo@gmail.com",
            status: "active",
            age: 45,
        },
        {
            id: 9,
            username: "Spencer Selover",
            img: "https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?auto=compress&cs=tinysrgb&w=1600",
            email: "spencerselover@gmail.com",
            status: "pending",
            age: 45,
        },
        {
            id: 10,
            username: "Daniel Xavier",
            img: "https://images.pexels.com/photos/1121796/pexels-photo-1121796.jpeg?auto=compress&cs=tinysrgb&w=1600",
            email: "danielxavier@gmail.com",
            status: "active",
            age: 45,
        },
    ]

// temporary hotel data

export const hotelColumns = [
{ field: 'id', headerName: 'ID', width: 70 },
{ field: "hotel", headerName: "Hotel", width: 230,
    renderCell: (params) => {
        return(
            <div className="cellWithImg">
                <img className="cellImg" src={params.row.img} alt="avatar"/>
                {params.row.hotel}
            </div>
        )
    }
    },
{ field: 'country', headerName: 'Country', width: 230 },
{ field: 'rooms', headerName: 'Rooms', width: 100 },
{ field: 'status', headerName: 'Status', width: 160,
    renderCell: (params) => {
        return(
            <div className={`cellWithStatus ${params.row.status}`}>
                {params.row.status}
            </div>
        )
    }
},

];



export const hotelRows = [
        {
            id: 1,
            hotel: "Highlife Hotel",
            img: "https://images.pexels.com/photos/96444/pexels-photo-96444.jpeg?auto=compress&cs=tinysrgb&w=1600",
            country: "Nigeria",
            status: "available",
            rooms: 90,
        },
        {
            id: 2,
            hotel: "Best Hotel",
            img: "https://images.pexels.com/photos/16104977/pexels-photo-16104977.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=699.825&fit=crop&h=1133.05",
            country: "USA",
            status: "occupied",
            rooms: 33,
        },
        {
            id: 3,
            hotel: "Cool Hotel",
            img: "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1600",
            country: "USA",
            status: "occupied",
            rooms: 33,
        },
        {
            id: 4,
            hotel: "Awesome Hotel",
            img: "https://images.pexels.com/photos/16104977/pexels-photo-16104977.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=699.825&fit=crop&h=1133.05",
            country: "Canada",
            status: "almost",
            rooms: 54,
        },
        {
            id: 5,
            hotel: "Highlife Hotel",
            img: "https://images.pexels.com/photos/96444/pexels-photo-96444.jpeg?auto=compress&cs=tinysrgb&w=1600",
            country: "Nigeria",
            status: "available",
            rooms: 90,
        },
        {
            id: 6,
            hotel: "Best Hotel",
            img: "https://images.pexels.com/photos/16104977/pexels-photo-16104977.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=699.825&fit=crop&h=1133.05",
            country: "USA",
            status: "occupied",
            rooms: 33,
        },
        {
            id: 7,
            hotel: "Highlife Hotel",
            img: "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=1600",
            country: "Canada",
            status: "almost",
            rooms: 54,
        },
        {
            id: 8,
            hotel: "Cool Hotel",
            img: "https://images.pexels.com/photos/96444/pexels-photo-96444.jpeg?auto=compress&cs=tinysrgb&w=1600",
            country: "Nigeria",
            status: "available",
            rooms: 90,
        },
        {
            id: 9,
            hotel: "Five Star Hotel",
            img: "https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            country: "USA",
            status: "occupied",
            rooms: 33,
        },
        {
            id: 10,
            hotel: "Best Hotel",
            img: "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=1600",
            country: "Canada",
            status: "almost",
            rooms: 54,
        },
    ]