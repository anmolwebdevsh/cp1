// Create lightbox element
const lightbox = document.createElement('div');
lightbox.className = 'lightbox';
document.body.appendChild(lightbox);

// Product data
const productData = {
    webbing: {
        title: "WEBBING",
        description: "Webbing is a strong fabric woven as a flat strip or tube of varying width and fibres, often used in place of rope. It is a versatile material used in military applications, outdoor gear, automotive safety, and fashion accessories. Our webbing products are manufactured using high-quality cotton, polyester, and blended materials, ensuring durability and reliability for various industrial and commercial applications.",
        image: "webbingsimages/webbing-8.jpg"
    },
    tapes: {
        title: "TAPES",
        description: "Tapes are narrow fabric strips used for edging, trimming, or adding detail to garments and accessories. They offer both functional support and decorative appeal.",
        image: "tapesimages/tapes-1.jpg"
    },
    drawcords: {
        title: "DRAW CORDS",
        description: "Draw cords are specialized textile products used for adjusting and securing garments and accessories. Our draw cords feature smooth operation, durability, and aesthetic appeal. Available in various materials and finishes including metal tippings, they are perfect for sportswear, casual wear, bags, and outdoor equipment applications.",
        image: "cordsimages/cords-33.jpg"
    },
    elastics: {
        title: "ELASTICS",
        description: "Elastic materials provide stretch and recovery properties essential for comfortable fit in garments and various applications. Our elastic products include woven, knitted, and braided varieties in different widths and stretch ratios. They are ideal for waistbands, cuffs, undergarments, medical applications, and any product requiring flexible adjustment.",
        image: "elasticimages/elasttic2.jpg"
    },
    Belts: {
        title: "BELTS",
        description: "Belts are simple yet essential accessories designed to secure clothing and add a finishing touch to any outfit. They blend function with fashion, making them a staple in every wardrobe.",
        image: "beltsimage/braidedbelts/belt-53.jpg"
    },
    zipper: {
        title: "ZIPPER",
        description: "Zipper pullers are small attachments on zippers that make opening and closing easier.",
        image: "assets/zipperpuller.jpg"
    },
    laces: {
        title: "laces",
        description: "Laces are versatile cords used to fasten or embellish shoes, garments, and accessories. They combine function with style, adding detail, texture, and a secure fit.",
        image: "assets/KMP_8350.jpg"
    },
    patches: {
        title: "patches",
        description: "Patches are decorative or functional pieces made from fabric, embroidery, PVC, or woven materials. They are used to display logos, names, artwork, or messages and can be attached to clothing, bags, uniforms, and more.",
        image: "assets/KMP_8553.jpg"
    }
};

// Modal functionality
document.addEventListener('DOMContentLoaded', function () {
    console.log('DOM loaded, setting up modal');

    const modal = document.getElementById('productModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');
    const closeBtn = document.getElementsByClassName('close')[0];

    console.log('Modal elements:', { modal, modalTitle, modalDescription, closeBtn });

    // Use event delegation for product cards
    document.addEventListener('click', function (e) {
        const productCard = e.target.closest('.product-card');
        if (productCard) {
            console.log('Product card clicked!');

            const productType = productCard.getAttribute('data-product');
            console.log('Product type:', productType);

            const product = productData[productType];
            console.log('Product data:', product);

            if (product) {
                modalTitle.textContent = product.title;
                modalDescription.textContent = product.description;

                // Set background image for modal
                const modalImage = document.querySelector('.modal-image');
                modalImage.style.setProperty('--modal-bg-image', `url('${product.image}')`);


                // Add subcategories based on product type
                const subcategoriesList = document.getElementById('subcategoriesList');
                if (subcategoriesList) {
                    subcategoriesList.innerHTML = '';

                    const productSubcategories = {
                        webbing: [
                            { name: "Bedford Webbing", desc: "Bedford webbing is a tough, tightly woven fabric used for straps, belts, and gear requiring high strength and durability.", image: "webbingsimages/webbing-1.jpg" },
                        ],
                        tapes: [
                            { name: "Knit Tape", desc: "Knit tapes are soft, stretchy tapes made by knitting, used for flexible trims and edges.", image: "assets/KMP_8315.jpg" },
                            { name: "Jacquard Tape", desc: "Jacquard tapes are patterned woven tapes used for decoration and branding.", image: "assets/jacquardtapes.jpg" },
                            { name: "Canvas Tape", desc: "Canvas elastic is a sturdy, woven elastic with a canvas-like texture, used for strong support and durability.", image: "tapesimages/tapes-1.jpg" },
                            { name: "Herringbone Tape", desc: "Herringbone elastic is a durable stretch band with a zigzag pattern, offering firm support and flexibility.", image: "tapesimages/tapes-2.jpg" },
                            { name: "Twill Tape", desc: "Twill tape is a strong, flat tape with a diagonal weave, used for binding and reinforcing.", image: "tapesimages/tapes-3.jpg" },

                        ],
                        drawcords: [
                            { name: "Recycled Drawcords", desc: "Recycled drawcords are eco-friendly adjustable cords made from recycled materials, used in clothing and bags.", image: "cordsimages/cords-32.jpg" },
                            { name: "Bio-degradable Drawcords", desc: "Biodegradable drawcords are eco-friendly cords that naturally decompose, minimizing environmental impact.", image: "cordsimages/cords-33.jpg" },
                            { name: "Active-Wear Drawcords", desc: "Active-wear drawcords are durable, stretchy cords designed for sportswear to provide secure, comfortable adjustments.", image: "cordsimages/cords-34.jpg" },
                            { name: "Silicon Tip Drawcords", desc: "Silicon tip drawcords are cords with silicone-coated ends to prevent fraying and make threading easier.", image: "cordsimages/cords-35.jpg" },
                            { name: "Drawcords w/t wrapping", desc: "Drawcords w/t wrapping are cords with wrapped or sealed ends to prevent fraying and ease use.", image: "cordsimages/cords-35.jpg" },
                            { name: "Drawcords w/t tassel", desc: "Drawcords w/t tassel are cords finished with decorative tassels at the ends for style and flair.", image: "cordsimages/cords-35.jpg" },
                            { name: "Drawcords w/t clear plastic tip", desc: "Drawcords w/t clear plastic tip are cords with transparent plastic ends to prevent fraying and allow easy threading.", image: "cordsimages/cords-35.jpg" },
                            { name: "Drawcords w/t metal tip", desc: "Drawcords w/t metal tip are cords finished with metal ends for durability, a clean look, and easy threading.", image: "cordsimages/cords-35.jpg" },
                            { name: "Drawcords w/t coloured plastic tip", desc: "Drawcords w/t coloured plastic tip are cords with colored plastic ends for a neat finish and added style.", image: "cordsimages/cords-35.jpg" },
                        ],
                        elastics: [
                            { name: "Woven Elastics", desc: "Woven elastic is a strong, non-roll elastic ideal for waistbands and firm support.", image: "elasticimages/elasttic1.jpg" },
                            { name: "Knitted Elastics", desc: "Knitted elastic is a soft, flexible elastic ideal for lightweight fabrics and comfortable stretch.", image: "elasticimages/elasttic2.jpg" },
                            { name: "Jacquard Elastics", desc: "Jacquard elastic is a stretch band with woven designs or logos, used for stylish support in garments.", image: "elasticimages/elasttic3.jpg" },
                            { name: "Honeycomb Elastic", desc: "Honeycomb elastic is a soft, stretchy elastic with a breathable pattern, used in clothing for comfort.", image: "elasticimages/elasttic4.jpg" },
                            { name: "Checks Elastic", desc: "Checks elastic is a stretch band featuring a checkered pattern, combining style with flexibility.", image: "elasticimages/elasttic5.jpg" }
                        ],
                        Belts: [
                            { name: "Webbing Belts", desc: "Webbing belts are strong woven fabric belts for casual and outdoor use.", image: "beltsimage/WebbingBelts/belt-24.jpg" },
                            { name: "Macrame Belts", desc: "Macrame belts are handcrafted belts made by knotting cords or threads into decorative patterns.", image: "beltsimage/WebbingBelts/belt-29.jpg" },
                            { name: "Braided Belts", desc: "Braided belts are belts made by weaving strips or cords together, offering flexibility and a textured look.", image: "beltsimage/WebbingBelts/belt-32.jpg" },
                            { name: "PU Belts", desc: "PU belts are belts made from polyurethane, offering a leather-like look with durability and flexibility.", image: "beltsimage/PUBelts/belt-40.jpg" },
                        ],
                        patches: [
                            { name: "Emb. Patches", desc: "Emb. patches (embroidery patches) are fabric patches with designs stitched on, used for decoration or branding on clothing and accessories.", image: "assets/patches.jpg" },
                        ],
                        laces: [
                            { name: "Crochet Laces", desc: "Crochet laces are decorative trims created using a crochet hook and thread. They are known for their firm, structured texture compared to knitted lace, which is more stretchy.", image: "assets/KMP_8406.jpg" },
                        ]
                    };

                    const subcategories = productSubcategories[productType] || [];
                    const categoryHTML = subcategories.map(item => `
                        <div class="type-card">
                            <div class="type-card-image">
                                <img src="${item.image}" alt="${item.name}" class="zoomable-image">
                            </div>
                            <div class="type-card-content">
                                <h4>${item.name}</h4>
                                <p>${item.desc}</p>
                            </div>
                        </div>
                    `).join('');
                    subcategoriesList.innerHTML = categoryHTML;
                }

                modal.style.display = 'block';
                console.log('Modal should be visible now');
            }
        }
    });

    // Close modal when clicking X
    if (closeBtn) {
        closeBtn.addEventListener('click', function () {
            modal.style.display = 'none';
        });
    }

    // Handle image clicks for lightbox
    document.addEventListener('click', function (e) {
        if (e.target.classList.contains('zoomable-image')) {
            const img = e.target;
            lightbox.innerHTML = `<img src="${img.src}" alt="${img.alt}">`;
            lightbox.style.display = 'block';
            e.stopPropagation();
        }
    });

    // Close modal when clicking outside
    window.addEventListener('click', function (event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
        if (event.target === lightbox) {
            lightbox.style.display = 'none';
        }
    });
});