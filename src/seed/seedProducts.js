import db from "../db/db.js";
import { addDoc, collection } from "firebase/firestore"


const products = [
  {
    id: "DFW231",
    name: "Venum Abyss Boxing Gloves - Shadow Blue",
    description: "The Venum Abyss Boxing Gloves in Shadow Blue are a high-quality option for boxers and martial arts practitioners. They feature a durable synthetic leather exterior and high-density foam that provides excellent protection and comfort. Their ergonomic design and velcro closure ensure a secure fit, while the dark blue color gives them a modern and attractive look. Ideal for training and competition, they offer a perfect balance between functionality and style.",
    stock: 4,
    price: 89.90,
    image: "/img/abyssGloves.webp" ,
    category: "guantes"
  },
  {
    id: "KJH563",
    name: "Venum Contender Boxing Gloves - Pink",
    description: "Los guantes Venum Contender Boxing Gloves en Pink son una opción excelente para quienes buscan estilo y funcionalidad en el boxeo. Confeccionados en cuero sintético de alta calidad, ofrecen durabilidad y un ajuste cómodo. Su acolchado de espuma de alta densidad proporciona una protección óptima durante los entrenamientos y combates. El diseño atractivo en color rosa los convierte en una elección única y moderna, perfectos para destacar en el ring. Ideales para principiantes y practicantes avanzados, combinan rendimiento y estética de manera efectiva.",
    stock: 2,
    price: 44.99,
    image: "/img/contenderPink.webp" ,
    category: "guantes"
  },
  ,
  {
    id: "DYU951",
    name: "Venum Predator Mouthguard - Red/Black",
    description: "El Venum Predator Mouthguard en Red/Black es perfecto para quienes buscan destacar en el ring. Ofrece una protección dental superior y un ajuste cómodo, diseñado para adaptarse a la forma de tu boca. Su atractivo color rojo y negro añade un toque de personalidad a tu equipo de combate.",
    stock: 9,
    price: 22.99,
    image: "/img/predatorRed.webp",
    category: "bucales"
  },
  {
    id: "SDG216",
    name: "Venum Elite Shin Guards - Black/Dark camo",
    description: "Los tibiales Venum Elite Shin Guards en Black/Dark Camo combinan estilo y protección. Hechos de materiales resistentes, brindan una excelente absorción de impactos y un ajuste cómodo gracias a su diseño ergonómico. Su apariencia de camuflaje oscuro les da un aspecto distintivo, perfectos para entrenamientos intensos y competiciones.",
    stock: 7,
    price: 109.99,
    image: "/img/elite.webp" ,
    category: "tibiales"
  },
 
  {
    id: "KFJ548",
    name: "Venum Elite Evo Shinguards - Black/Bronzeo",
    description: "Los tibiales Venum Elite Evo en Black/Bronze ofrecen una combinación perfecta de protección y estilo. Con un exterior de alta calidad y acolchado de espuma densa, garantizan una excelente absorción de impactos. Su diseño elegante en negro y bronce asegura que te destaques en el ring mientras te mantienes protegido durante el entrenamiento y las competencias.",
    stock: 2,
    price: 119.99,
    image: "/img/eliteEvo.webp" ,
    category: "tibiales"
  },
  {
    id: "DSU245",
    name: "Venum Contender Boxing Gloves - Grey",
    description: "Los guantes Venum Contender Boxing Gloves en Grey son ideales para boxeadores de todos los niveles. Fabricados en cuero sintético de alta calidad, ofrecen una gran durabilidad y comodidad. Su acolchado de espuma de alta densidad garantiza una excelente protección, mientras que su diseño moderno en gris aporta un toque elegante al entrenamiento y las competiciones.",
    stock: 8,
    price: 44.99,
    image: "/img/contenderGrey.webp",
    category: "guantes"
  },
  {
    id: "JFR982",
    name: "Venum Predator Mouthguard",
    description: "El Venum Predator Mouthguard es esencial para la protección dental en deportes de combate. Diseñado para adaptarse cómodamente a la forma de tu boca, ofrece una excelente protección y soporte. Su construcción de alta calidad asegura durabilidad y confort, permitiendo un mejor rendimiento en el ring.",
    stock: 6,
    price: 22.99,
    image: "/img/predator.webp",
    category: "bucales"
  },
  {
    id: "SDE645",
    name: "Venum Elite Standup Shin guards - Gold/Black",
    description: "The Venum Elite Standup Shin Guards in Gold/Black are designed for optimal protection and performance in striking sports. Made with high-quality materials, they feature a lightweight yet durable construction that ensures comfort during training and competition. The ergonomic design offers excellent mobility, while the reinforced padding absorbs impact effectively. With a striking gold and black color scheme, these shin guards provide a stylish and professional look, making them a must-have for any serious athlete.",
    stock: 3,
    price: 119.99,
    image: "/img/eliteStandup.webp",
    category: "tibiales"
  },
  {
    id: "LJI642",
    name: "Venum Predator Mouthguard - Khaki/Black",
    description: "El Venum Predator Mouthguard en Khaki/Black combina funcionalidad y estilo. Ofrece una excelente protección dental gracias a su diseño adaptado a la boca, y su color moderno le da un toque distintivo. Ideal para deportistas que buscan seguridad sin sacrificar el estilo.",
    stock: 8,
    price: 22.99,
    image: "/img/predatorKhaki.webp",
    category: "bucales"
  },
]




//SACAMOS EL ID DE LOS PRODUCTOS PARA NO HACERLO MANUALMENTE 
const seedProducts = () => {
  const productsRef = collection(db, "products")
  products.map(( { id, ...dataProduct } )=> {
    addDoc(productsRef, dataProduct)
  })

  console.log("productos subidos")
  return
}

seedProducts(); 