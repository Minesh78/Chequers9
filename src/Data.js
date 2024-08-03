const photos = [
	"https://i.ibb.co/6mSHhwL/Mr-Arun-Patil-Kop3.webp",
	"https://i.ibb.co/ZNBKt4m/Mr-Ganesh-Sawant-Bhor-Pune.webp",
	"https://i.ibb.co/dc6MrXJ/Mr-Sarjoshi-Achara-Malvan1.webp",
	"https://i.ibb.co/KDK1f18/Mr-Chetan-Desai.webp",
	"https://i.ibb.co/dj4Gz0x/Mr-Sanjay-Sawant-Kudal-Sindhudurg01.webp",
	"https://i.ibb.co/xqYK4F6/Mr-Vikas-Mane-Islampur2.webp",
	"https://i.ibb.co/jzp7ZK0/Mr-Vikas-Mane-Islampur1.webp",
	"https://i.ibb.co/pKh6K7Y/Mr-Arun-Patil-Kop2.webp",
	"https://i.ibb.co/gFVHXKL/Mr-Mrs-Deepali-Joshi-Ambavane-Kop.webp",
	"https://i.ibb.co/NNCFkNb/Mr-L-M-Kumbhar-Kop2.webp",
	"https://i.ibb.co/MsBLYCc/Mr-Amit-Chavan-01.webp",
	"https://i.ibb.co/t3sxR5T/Shree-Mouni-Maharaj-Math-Patgaon1.webp",
	"https://i.ibb.co/Q64YHSg/Mr-Rohan-Kadam-2.webp",
];

const projectImages = [
	"https://i.ibb.co/R3wrxmg/Mr-Mrs-Deepali-Joshi-Ambavane-Kop.webp",
	"https://i.ibb.co/XsZJJ2n/Mr-Amit-Chavan-01.webp",
	"https://i.ibb.co/WgZ9bn4/Mr-Amit-Chavan-02.webp",
	"https://i.ibb.co/3Npmjmx/Mr-Arun-Patil-Kop1.webp",
	"https://i.ibb.co/WnQzKHR/Mr-Arun-Patil-Kop2.webp",
	"https://i.ibb.co/4MKPHmz/Mr-Arun-Patil-Kop3.webp",
	"https://i.ibb.co/nnjvtJV/Mr-Chetan-Desai.webp",
	"https://i.ibb.co/s20v88r/Mr-Ganesh-Sawant-Bhor-Pune.webp",
	"https://i.ibb.co/kQzXsbY/Mr-L-M-Kumbhar-Kop1.webp",
	"https://i.ibb.co/ZJmht0s/Mr-L-M-Kumbhar-Kop2.webp",
	"https://i.ibb.co/GHg6Vmd/Mr-Rohan-Kadam-1-jpeg.webp",
	"https://i.ibb.co/DfWrXg0/Mr-Rohan-Kadam-2-jpeg.webp",
	"https://i.ibb.co/hLF4LNX/Mr-Rohan-Kadam-3-jpeg.webp",
	"https://i.ibb.co/DzcPCfV/Mr-Rohan-Kadam-4.webp",
	"https://i.ibb.co/yqZNpFJ/Mr-Sanjay-Sawant-Kudal-Sindhudurg01.webp",
	"https://i.ibb.co/0DVcpNP/Mr-Sanjay-Sawant-Kudal-Sindhudurg2.webp",
	"https://i.ibb.co/QJH7kqX/Mr-Sarjoshi-Achara-Malvan1.webp",
	"https://i.ibb.co/Z6PypnH/Mr-Sarjoshi-Achara-Malvan2.webp",
	"https://i.ibb.co/zH2XpN8/Mr-Vikas-Mane-Islampur1.webp",
	"https://i.ibb.co/pdC1DJr/Mr-Vikas-Mane-Islampur2.webp",
	"https://i.ibb.co/KzGdxTQ/Ray-Associates-Kop.webp",
	"https://i.ibb.co/42QBSFP/Shree-Mouni-Maharaj-Math-Patgaon1.webp",
	"https://i.ibb.co/m8ft40R/Shree-Mouni-Maharaj-Math-Patgaon2.webp",
];

const architecturalProjects = [
	{
		id: "01",
		title: "Project for Deepali Joshi",
		location: "Kolhapur",
		type: "architectural",
		imageLink:
			"https://i.ibb.co/LCrwmSN/Mr-Mrs-Deepali-Joshi-Ambavane-Kop.webp",
	},
	{
		id: "02",
		title: "Project for Mr. Amit Chavan",
		location: "-",
		type: "interior",
		imageLink: "https://i.ibb.co/Q6nZnRQ/Mr-Amit-Chavan-01.webp",
		otherImages: ["https://i.ibb.co/9ZbQ3rH/Mr-Amit-Chavan-02.webp"],
	},
	{
		id: "03",
		title: "Project for Mr. Arun Patil",
		location: "Kolhapur",
		type: "architectural",
		imageLink: "https://i.ibb.co/dr3FNhG/Mr-Arun-Patil-Kop2.webp",
		otherImages: ["https://i.ibb.co/Bn3SkVZ/Mr-Arun-Patil-Kop1.webp",
			"https://i.ibb.co/6Jcnc4x/Mr-Arun-Patil-Kop3.webp"],
	},
	{
		id: "04",
		title: "Project for Mr. Ganesh Sawant",
		location: "Bhar, Pune",
		type: "architectural",
		imageLink: "https://i.ibb.co/ky5whLz/Mr-Ganesh-Sawant-Bhor-Pune.webp",
		otherImages: [],
	},
	{
		id: "05",
		title: "Project for Mr. L M Kumbhar",
		location: "Kolhapur",
		type: "architectural",
		imageLink: "https://i.ibb.co/L9R60nf/Mr-L-M-Kumbhar-Kop1.webp",
		otherImages: ["https://i.ibb.co/z4Hv72j/Mr-L-M-Kumbhar-Kop2.webp"],
	},
	{
		id: "06",
		title: "Project for Mr. Sanjay Sawant",
		location: "kudal, Sindhudurg",
		type: "architectural",
		imageLink:
			"https://i.ibb.co/0f14VvD/Mr-Sanjay-Sawant-Kudal-Sindhudurg01.webp",
		otherImages: [
			"https://i.ibb.co/XWmMnj9/Mr-Sanjay-Sawant-Kudal-Sindhudurg2.webp",
		],
	},
	{
		id: "07",
		title: "Project for Mr. Sarjoshi",
		location: "Achara, Malvan",
		type: "architectural",
		imageLink: "https://i.ibb.co/d2Mxs9P/Mr-Sarjoshi-Achara-Malvan1.webp",
		otherImages: ["https://i.ibb.co/CBGRk4V/Mr-Sarjoshi-Achara-Malvan2.webp"],
	},
	{
		id: "08",
		title: "Project for Mr. Vikas Mane",
		location: "Islampur",
		type: "architectural",
		imageLink: "https://i.ibb.co/Mcq3rn2/Mr-Vikas-Mane-Islampur1.webp",
		otherImages: ["https://i.ibb.co/SmyGrnK/Mr-Vikas-Mane-Islampur2.webp"],
	},
	{
		id: "09",
		title: "Shree Mouni Maharaj Math",
		location: "Patgaon",
		type: "architectural",
		imageLink:
			"https://i.ibb.co/3vZy2sz/Shree-Mouni-Maharaj-Math-Patgaon1.webp",
		otherImages: [
			"https://i.ibb.co/c3WHgr4/Shree-Mouni-Maharaj-Math-Patgaon2.webp",
		],
	},
	{
		id: "11",
		title: "Project for Mr. Rohan Kadam",
		location: "-",
		type: "interior",
		imageLink: "https://i.ibb.co/TLWwLmv/Mr-Rohan-Kadam-1-jpeg.webp",
		otherImages: [
			"https://i.ibb.co/26fSx6s/Mr-Rohan-Kadam-2-jpeg.webp",
			"https://i.ibb.co/4dQqvsC/Mr-Rohan-Kadam-3-jpeg.webp",
			"https://i.ibb.co/kh6jc7n/Mr-Rohan-Kadam-4.webp",
		],
	},
	{
		id: "12",
		title: "Project for Mr. Chetan Desai",
		location: "-",
		type: "interior",
		imageLink: "https://i.ibb.co/vhbDDfp/Mr-Chetan-Desai.webp",
		otherImages: [],
	},
	{
		id: "13",
		title: "Project for Ray Associates",
		location: "Kolhapur",
		type: "interior",
		imageLink: "https://i.ibb.co/cD1H4zT/Ray-Associates-Kop.webp",
		otherImages: [],
	},
];




export { photos, projectImages, architecturalProjects };
