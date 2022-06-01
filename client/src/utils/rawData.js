import { facialImgs } from "./rawDataImages";

export const galleryImg = [];
export const allCategories = [
  {
    title: "Facials",
    image: `${facialImgs.facials}`,
    description: `Facial treatments can help
        slow down the aging process and prevent the appearance of wrinkles. 
        Massaging your face with an anti-aging moisture will immediately increase 
        the blood circulation and oxygen flow, which promotes collagen production 
        and enhance the elasticity of your skin. (Organic when possible). (Vegetarian always). 
        (Vegan when possible). Chirally Correct (purified) Skincare.`,
    // services: null,
    subcategories: [
      {
        title: "SKIN16 Facial",
        image: `${facialImgs.steam}`,
        price: "$145",
        description: (
          <p>
            <br />
            <br />
            This <strong>signature facial </strong>
            is including all personalized cleanser, enzyme, steam, light
            extraction, high frequency, mask, serums and sunscreen for 50
            minutes.
            <br />
            <br />
            Recommended every 3-4 week to keep up. Add on and make more special.
          </p>
        ),

        button: "Book",
      },
      {
        title: "Porcelain Nano-fill Facial",
        image: `${facialImgs.nano}`,
        price: "$350",
        description: (
          <p>
            The low cost alternative to full face fillers. Non-invasive and safe
            for any age. Designed to reduce wrinkles, brighten, hydrate, and
            protect the skin without any downtime, redness, or irritation.
            <br />
            <br />
            An extraordinary combination of luxurious, healing and nutritional
            butter and collage, plant stem cells that protect, speed diminishing
            the appearance of wrinkles and crepiness.
            <br />
            <br />
            Best results are achieved results are achieved when done in a series
            and Must be on Modvellum protocol and free of contraindications.
          </p>
        ),
        button: "Book",
      },
      {
        title: "The Modern Facial - 75 min Facial",
        image: `${facialImgs.oxygen}`,
        price: "$225",
        description: (
          <p>
            You will have a unique experience and result. All Customize steps.
            Exfoliating and Oxygen infusion with LED Light will stimulate a
            healing response to destroying acne-causing bacteria or plumping
            fine lines. Also calming effect on skin, reduces inflammation. Great
            for most skin types, even sensitive, depleted or sun exposed skin.
            <br />
            <br />
            This treatment is not recommended for someone who is pregnant or
            nursing, subject to using medications causing light sensitivity or
            having metastasis.
          </p>
        ),
        button: "Book",
      },
      {
        title: "Grow Gorgeous Gold",
        image: `${facialImgs.gold}`,
        price: "$285",
        description: (
          <p>
            <br />
            Gold benefits for all skin types, it helps the skin's elimination of
            toxins and combats sun damage. Gold patch also reduces tired
            appearance and brightens up the skin by circulating blood and
            oxygen.
            <br />
            <br />
            solution for : Detoxifying / Brightening/ Rejuvenation / Tightening
            <br />
            <br />
            cleansing-dermaplaning-bubble enzyme-ample infusion-24k gold
            stimulation-gold placentahydrojelly mask.
          </p>
        ),
        button: "Book",
      },
    ],
    color: "rgba(216, 155, 166, 0.75)",
    secondaryColor: "#000",
  },
  {
    title: "Peels",
    image: `${facialImgs.peels}`,
    description: `Restore a youthful, vibrant appearance to wrinkly, 
        blotchy, sun-damaged skin. Each peel has unique benefits for the skin. Peels also improves acne 
        scars, skin texture, and reduces the effects of sun damage. (Must use pre-post home care 
        products). Ask me How Today!`,
    // services: null,
    subcategories: [
      {
        title: "Porcelain Peel",
        image: `${facialImgs.porcelain}`,
        price: "$185",
        description: (
          <p>
            <br />
            Want to feel the difference? Reduce the appearance of fine lines,
            wrinkles and various types of pigmentation. Here is a peel that you
            have never had before.
            <br />
            <br />
            Aloe/ Chamomile/ Blacktea/ Kombuchka/ L-lactic Acid and More.
          </p>
        ),
        button: "Book",
      },
      {
        title: "Rough Peel",
        image: `${facialImgs.rough}`,
        price: "$215",
        description: (
          <p>
            <br />
            True anti-aging peel. Quick cell renewal and increased collagen
            production.
            <br />
            <br />
            Macqui berry/ Mandelic Acid/ Niacin/ L-lactic Acid/ Mandelic Acid
            and More.
          </p>
        ),
        button: "Book",
      },
      {
        title: "The Good Peel",
        image: ``,
        price: "$265",
        description: (
          <p>
            For a refreshing and toning treatment.
            <br />
            <br />
            <strong>Contraindication for dermaplaning:</strong> open skin
            lesions, dermatitis, uncontrolled diabetes, active cold sores, skin
            cancer, inflamed acne lesions, use of topical prescriptions such as
            Retin-A within one week, use of Accutane within 6 months, sunburn,
            cancer therapy, blood thinners, had laser treatments within two
            weeks.
            <br />
            <br />
            <strong>Contraindication for microcurrent:</strong> active cancer,
            cardiac pacemakers, epilepsy, etc.
          </p>
        ),
        button: "Book",
      },
    ],
    color: "rgba(13, 104, 120, 0.75)",
    secondaryColor: "#fff",
  },
  {
    title: "LED Therapy",
    image: `${facialImgs.led}`,
    description: `LED Therapy low-light therapy is safe, effective and a
        convenient way to achieve a healthy, youthful glow in a natural, non-toxic, non-invasive manner. 
        Reduce the appearance of fine lines and wrinkles while experiencing an improvement in skin texture,
        quality and smoothness.`,
    // services: null,
    subcategories: [
      {
        title: "Sculplla + H2 + LED Light",
        image: `${facialImgs.good}`,
        price: "$245",
        sndPrice: "$275 (With customize HydroJelly Mask)",
        description: (
          <p>
            <br />A no-needle topical filler that contains PLLA(Poly-L-Lactic
            Acid) which is the same ingredient in Sculptra. PLLA stimulates
            neocollagenesis and brings back volume. The serum includes other
            anti-aging favorites like caffeine, niacinamide, and EFG peptides.
            No downtime, avoid getting treated area wet for 12 hours and no
            scrubbing for 3 days. A series of 3-6 treatments is recommended for
            optimal results that can last up to 5 months with maintenance.
          </p>
        ),
        button: "Book",
      },
    ],
    color: "rgba(216, 155, 166, 0.75)",
    secondaryColor: "#000",
  },
  // { title: "Eyebrows Eyeliner Lips", image: ``, description: `Coming Soon!! - Microblading -  Is a manual
  //     form of tattooing, often referred to as 3D brows or brow-embroidery. Natural and crisp hair strokes
  //     are created using a fine blade that deposits pigment into the skin. Hair strokes resemble eyebrow hairs,
  //     therefore the most natural.`, services: null, subcategories: [
  // {title: '', image: ``, price: '', description: '', button: 'Book'},
  // {title: '', image: ``, price: '', description: '', button: ''},
  // {title: '', image: ``, price: '', description: '', button: ''}
  // ], color: "rgba(13, 104, 120, 0.75)"
  // secondaryColor: "#fff",
  // },
  {
    title: "Scalp Treatments",
    image: `${facialImgs.scalp}`,
    description: `Clogged hair follicles, can cause hair thinning. Releasing 
        natural conditioning oils can help relieve dry scalp and remove flakes, stimulate blood flow in the head and 
        neck area so nutrients can better reach the scalp and nourish your hair. Taking care of your skin and scalp 
        is necessary for your health. Prevention is always more effective than treating the issue when it happens. 
        30min consultation free for first time client. book today! 
        Available only in San Rafael. `,
    // services: null,
    subcategories: [
      {
        title: "Pure Flash",
        image: ``,
        price: "$100",
        description: (
          <p>
            <br />
            Remove build up on the scalp with deep clean steam-clean-dry.
            <br />
            <br />
            Relief, Refresh, Restore!
          </p>
        ),
        button: "Book",
      },
      {
        title: "Urban Detox Fair",
        image: ``,
        price: "$185",
        description: (
          <p>
            <br />
            Natural way to exfoliate and nourishing serum with red light to
            revitalize, youthful scalp care.
          </p>
        ),
        button: "Book",
      },
    ],
    color: "rgba(13, 104, 120, 0.75)",
    secondaryColor: "#fff",
  },
];
export const addOn = [
  {
    title: "Add-On Services",
    image: `${facialImgs.add}`,
    services: [
      { title: "LED Light", price: "$40", br: true },
      { title: "Dermaplaning", price: "$40", br: true },
      { title: "Peel (face)", price: "$40" },
      { title: "Peel (face & neck)", price: "$50" },
      { title: "Peel (face & neck & decollete)", price: "$60", br: true },
      { title: "Oxygen therapy", price: "$30" },
      { title: "2 steps oxygen", price: "$50", br: true },
      { title: "Hot Oil Hand Treatment", price: "$20" },
      { title: "Hot Oil Hand Treatment with peel", price: "$30", br: true },
      { title: "Brazlian waxing - 30min womens only" },
      { title: "Soft Wax", price: "$65" },
      { title: "Hard Wax", price: "$75" },
    ],
    color: "rgba(216, 155, 166, 0.75)",
    secondaryColor: "#000",
  },
];
