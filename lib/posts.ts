export interface BlogPost {
  slug: string;
  title: string;
  categories: string[];
  excerpt: string;
  date: string;
  image?: string;
}

export interface Category {
  slug: string;
  name: string;
}

export const categories: Category[] = [
  { slug: "learn", name: "Learn" },
  { slug: "buying-a-home", name: "Buying a Home" },
  { slug: "home-maintenance", name: "Home Maintenance" },
  { slug: "first-time-home-buyer", name: "First Time Home Buyer" },
  { slug: "real-estate-tips", name: "Real Estate Tips" },
  { slug: "mortgage-tips", name: "Mortgage Tips" },
  { slug: "credit", name: "Credit" },
  { slug: "home-improvement", name: "Home Improvement" },
  { slug: "home-owner-tips", name: "Home Owner Tips" },
  { slug: "home-trends", name: "Home Trends" },
];

export const posts: BlogPost[] = [
  // === LEARN category (27 articles from the Learning Center) ===
  {
    slug: "a-step-by-step-guide-to-shopping-for-a-new-home",
    title: "A Step-by-Step Guide to Shopping for a New Home",
    categories: ["learn"],
    excerpt: "Whether this is your first or tenth home purchase, shopping for a new home is an exciting time. It can also be a stressful and lengthy process. This guide can help you stay on track and in your new home.",
    date: "February 18, 2021",
    image: "/images/shopping-home.jpg",
  },
  {
    slug: "first-time-homebuyers-checklist",
    title: "First-Time Homebuyer's Checklist",
    categories: ["learn"],
    excerpt: "Ready to purchase your first home? Use this easy-to-follow checklist to navigate the path to home ownership.",
    date: "February 18, 2021",
  },
  {
    slug: "understanding-cash-to-close",
    title: "Understanding Cash to Close",
    categories: ["learn"],
    excerpt: "If you have received your Closing Disclosure from your lender, you are almost done with your home buying journey.",
    date: "February 18, 2021",
  },
  {
    slug: "how-to-get-preapproved-for-a-mortgage",
    title: "How to Get Preapproved for a Mortgage",
    categories: ["learn"],
    excerpt: "Before you begin your new home search, talk to a lender about getting preapproved for a mortgage. This important step can save you time in negotiations.",
    date: "February 18, 2021",
  },
  {
    slug: "5-strategies-to-save-for-a-home",
    title: "5 Strategies to Save for a Home",
    categories: ["learn"],
    excerpt: "Buying a home is a big purchase, one that takes time to save up to afford. Many homebuyers use a mortgage to finance the majority of the cost.",
    date: "February 18, 2021",
  },
  {
    slug: "expenses-first-time-home-buyers-need-to-save-for",
    title: "Expenses First Time Home Buyers Need to Save For",
    categories: ["learn"],
    excerpt: "If you are getting ready to purchase your first home, there are a few expenses that you need to prepare for before getting to the final closing table.",
    date: "February 18, 2021",
  },
  {
    slug: "finding-the-right-location-to-buy-a-home",
    title: "Finding the Right Location to Buy a Home",
    categories: ["learn"],
    excerpt: "They say that buying a home is all about location, location, location. But what if you do not know what location is right for you?",
    date: "February 18, 2021",
  },
  {
    slug: "understanding-an-appraisal-contingency",
    title: "Understanding an Appraisal Contingency",
    categories: ["learn"],
    excerpt: "When buying a new home, you have the chance to put in a number of contingencies to the purchase contract to protect you during the process.",
    date: "February 18, 2021",
  },
  {
    slug: "should-i-buy-or-rent",
    title: "Should I Buy or Rent?",
    categories: ["learn"],
    excerpt: "The biggest question those considering homeownership need to answer is simple: Should I buy or rent my home?",
    date: "February 18, 2021",
  },
  {
    slug: "how-much-income-do-i-need-to-buy-a-house",
    title: "How Much Income Do I Need to Buy a House?",
    categories: ["learn"],
    excerpt: "Homeownership is not just for the ultra wealthy. While income is an important factor when buying a house, knowing exactly how much you need to earn is not as simple.",
    date: "February 18, 2021",
  },
  {
    slug: "what-you-need-to-know-about-cosigning-a-mortgage",
    title: "What You Need to Know About Cosigning a Mortgage",
    categories: ["learn"],
    excerpt: "If your credit, debt, or income is keeping you from buying a house, you may be tempted to have another person cosign your mortgage.",
    date: "February 18, 2021",
  },
  {
    slug: "popular-loans-for-buying-a-home",
    title: "Popular Loans for Buying a Home",
    categories: ["learn"],
    excerpt: "Finding a great deal on your home purchase requires that you understand the different types of home loans available.",
    date: "February 18, 2021",
  },
  {
    slug: "how-to-buy-a-house-with-no-money-down",
    title: "How to Buy a House with No Money Down",
    categories: ["learn"],
    excerpt: "Do you dream of homeownership but can't come up with the required down payment? Don't worry. You may be eligible for a no-money-down loan.",
    date: "February 18, 2021",
  },
  {
    slug: "do-i-need-a-realtor-to-buy-a-house",
    title: "Do I Need a Realtor to Buy a House?",
    categories: ["learn"],
    excerpt: "When you are ready to make a new home purchase, the first thing to consider is who you want on your team.",
    date: "February 18, 2021",
  },
  {
    slug: "how-much-do-i-need-for-a-house-down-payment",
    title: "How Much Do I Need for a House Down Payment?",
    categories: ["learn"],
    excerpt: "One of the first hurdles that potential homeowners must overcome is saving up a down payment.",
    date: "February 18, 2021",
  },
  {
    slug: "a-home-appraisal-checklist",
    title: "A Home Appraisal Checklist",
    categories: ["learn"],
    excerpt: "Searching for and finding the perfect new home is just one step of the home buying process.",
    date: "February 18, 2021",
  },
  {
    slug: "what-is-an-fha-mortgage-insurance-premium",
    title: "What Is an FHA Mortgage Insurance Premium?",
    categories: ["learn"],
    excerpt: "FHA mortgages are great for homebuyers without a sizable down payment or with low credit. Each situation is unique.",
    date: "February 18, 2021",
  },
  {
    slug: "a-home-inspection-checklist",
    title: "A Home Inspection Checklist",
    categories: ["learn"],
    excerpt: "When purchasing a home, it is always a good idea to have it professionally inspected. Many lenders even require it.",
    date: "February 18, 2021",
  },
  {
    slug: "what-to-look-for-in-a-neighborhood-when-buying-a-house",
    title: "What to Look for in a Neighborhood When Buying a House",
    categories: ["learn"],
    excerpt: "Evaluating a potential new home's features is just one part of finding the perfect place to buy.",
    date: "February 18, 2021",
  },
  {
    slug: "buydown-to-reduce-your-mortgage-interest-rate",
    title: "Buydown to Reduce Your Mortgage Interest Rate",
    categories: ["learn"],
    excerpt: "If you are buying a home, you have probably looked at all kinds of ways to reduce your monthly mortgage payment.",
    date: "February 18, 2021",
  },
  {
    slug: "buying-a-house-without-a-real-estate-agent",
    title: "Buying a House without a Real Estate Agent",
    categories: ["learn"],
    excerpt: "Working with a real estate agent can be very helpful when purchasing a house, especially if you are a first-time buyer.",
    date: "February 18, 2021",
  },
  {
    slug: "how-long-does-it-take-to-buy-a-house",
    title: "How Long Does It Take to Buy a House?",
    categories: ["learn"],
    excerpt: "The home buying process is exciting but can be lengthy, especially if you have a purchase fall through.",
    date: "February 18, 2021",
  },
  {
    slug: "how-to-determine-if-you-are-in-a-buyers-market-or-sellers-market",
    title: "How to Determine if You Are in a Buyer's Market or Seller's Market",
    categories: ["learn"],
    excerpt: "Being a savvy real estate buyer or seller requires that you know and understand the market conditions.",
    date: "February 18, 2021",
  },
  {
    slug: "how-to-get-your-house-ready-to-sell",
    title: "How to Get Your House Ready to Sell",
    categories: ["learn"],
    excerpt: "You've mastered the process of home buying, but are you ready to be a seller when it's time to move?",
    date: "February 18, 2021",
  },
  {
    slug: "negotiating-a-house-price-as-a-buyer",
    title: "Negotiating a House Price as a Buyer",
    categories: ["learn"],
    excerpt: "Buying or selling a home often comes with some negotiation. In fact, it is expected and normal for both parties.",
    date: "February 18, 2021",
  },
  {
    slug: "how-to-know-when-you-should-buy-a-house",
    title: "How to Know When You Should Buy a House",
    categories: ["learn"],
    excerpt: "Do you enthusiastically pore over home listings on online platforms in your spare time?",
    date: "February 18, 2021",
  },
  {
    slug: "what-is-the-average-down-payment-for-a-home",
    title: "What Is the Average Down Payment for a Home?",
    categories: ["learn"],
    excerpt: "One of the biggest hurdles to homeownership is saving up the all-important down payment.",
    date: "February 18, 2021",
  },

  // === BUYING A HOME / FIRST TIME HOME BUYER ===
  {
    slug: "maximizing-your-tax-refund-how-homebuyers-can-leverage-returns-for-down-payments-this-spring",
    title: "Maximizing Your Tax Refund: How Homebuyers Can Leverage Returns for Down Payments This Spring",
    categories: ["buying-a-home"],
    excerpt: "As tax season approaches, many individuals and families eagerly anticipate their tax refunds. For prospective homebuyers, this annual financial boost can serve as an opportunity.",
    date: "March 4, 2026",
    image: "/images/businesswoman-papers.jpg",
  },
  {
    slug: "spring-into-homeownership-smart-financial-steps-to-prep-for-the-spring-real-estate-season",
    title: "Spring into Homeownership: Smart Financial Steps to Prep for the Spring Real Estate Season",
    categories: ["buying-a-home"],
    excerpt: "As we approach the start of spring, the real estate market traditionally begins to heat up. Whether you're a first-time homebuyer or looking to make a move.",
    date: "February 27, 2026",
    image: "/images/modern-house-sunset.jpg",
  },
  {
    slug: "what-underwriting-really-looks-for-in-a-mortgage-loan",
    title: "What Underwriting Really Looks For in a Mortgage Loan",
    categories: ["buying-a-home", "first-time-home-buyer"],
    excerpt: "Underwriting is often the most misunderstood part of the mortgage process. Many buyers hear the word and immediately feel nervous.",
    date: "February 5, 2026",
    image: "/images/underwriter-docs.jpg",
  },
  {
    slug: "common-mistakes-to-avoid-after-pre-approval",
    title: "Common Mistakes to Avoid After Pre-Approval",
    categories: ["buying-a-home", "first-time-home-buyer"],
    excerpt: "Pre-Approval Is a Strong Start—But Not the Finish Line. Getting pre-approved for a mortgage is a big milestone.",
    date: "January 27, 2026",
  },
  {
    slug: "how-to-prepare-for-your-first-consultation-with-a-mortgage-professional",
    title: "How to Prepare for Your First Consultation with a Mortgage Professional",
    categories: ["buying-a-home", "first-time-home-buyer"],
    excerpt: "Your first consultation with a mortgage professional is an important step in the homebuying journey. It's not a commitment to apply—it's a conversation.",
    date: "December 17, 2025",
  },
  {
    slug: "understanding-the-cost-of-waiting-to-buy-a-home",
    title: "Understanding the Cost of Waiting to Buy a Home",
    categories: ["buying-a-home", "first-time-home-buyer"],
    excerpt: "For many potential homebuyers, it can feel tempting to 'wait it out'—to hold off buying until prices drop or market conditions feel more favorable.",
    date: "December 2, 2025",
  },
  {
    slug: "what-to-expect-in-the-housing-market-this-september",
    title: "What to Expect in the Housing Market This September",
    categories: ["buying-a-home", "real-estate-tips"],
    excerpt: "As summer winds down and families settle into the new school year, the housing market often experiences a natural shift.",
    date: "September 4, 2025",
  },
  {
    slug: "spring-2025-housing-market-what-buyers-need-to-know",
    title: "Spring 2025 Housing Market: What Buyers Need to Know",
    categories: ["buying-a-home", "first-time-home-buyer", "mortgage-tips", "real-estate-tips"],
    excerpt: "Spring consistently ranks as one of the most active seasons in real estate—and for good reason.",
    date: "April 8, 2025",
  },
  {
    slug: "how-to-improve-your-mortgage-approval-chances",
    title: "How to Improve Your Mortgage Approval Chances",
    categories: ["buying-a-home", "credit"],
    excerpt: "Getting approved for a mortgage is an exciting step toward homeownership, but it requires careful financial planning.",
    date: "March 13, 2025",
  },
  {
    slug: "how-to-choose-the-right-mortgage-lender-or-broker",
    title: "How to Choose the Right Mortgage Lender or Broker",
    categories: ["buying-a-home", "first-time-home-buyer"],
    excerpt: "Choosing the right mortgage professional is a critical step in the home-buying process.",
    date: "February 26, 2025",
  },

  // === HOME MAINTENANCE ===
  {
    slug: "how-to-navigate-april-showers-essential-tips-for-protecting-your-new-homes-exterior-during-spring",
    title: "How to Navigate April Showers: Essential Tips for Protecting Your New Home's Exterior During Spring",
    categories: ["home-maintenance"],
    excerpt: "As we move into spring, the well-known saying 'April showers bring May flowers' comes to mind. While the spring rain is essential for nature's beauty, it can also pose challenges.",
    date: "March 11, 2026",
    image: "/images/tropical-porch.jpg",
  },
  {
    slug: "preparing-your-home-for-winter-essential-tips-for-homeowners",
    title: "Preparing Your Home for Winter: Essential Tips for Homeowners",
    categories: ["home-maintenance", "home-owner-tips"],
    excerpt: "As temperatures drop and the days grow shorter, preparing your home for winter becomes one of the smartest steps you can take.",
    date: "December 5, 2025",
    image: "/images/holiday-living-room.jpg",
  },
  {
    slug: "how-to-budget-for-homeownership-beyond-the-mortgage-payment",
    title: "How to Budget for Homeownership: Beyond the Mortgage Payment",
    categories: ["first-time-home-buyer", "home-maintenance", "home-owner-tips"],
    excerpt: "Buying a home is an exciting milestone—but it also comes with a range of new financial responsibilities.",
    date: "August 8, 2025",
  },
  {
    slug: "summer-home-maintenance-tips-every-homeowner-should-know",
    title: "Summer Home Maintenance Tips Every Homeowner Should Know",
    categories: ["home-maintenance", "home-owner-tips"],
    excerpt: "As the weather heats up, it's a good time to give your home a little extra attention.",
    date: "June 14, 2025",
  },
  {
    slug: "spring-cleaning-tips-that-may-boost-your-homes-value",
    title: "Spring Cleaning Tips That May Boost Your Home's Value",
    categories: ["home-improvement", "home-maintenance", "home-owner-tips"],
    excerpt: "Spring cleaning isn't just about dusting and decluttering—it's an opportunity to enhance your home's appeal, functionality, and even its value.",
    date: "May 15, 2025",
  },
  {
    slug: "5-benefits-of-regular-home-maintenance",
    title: "5 Benefits of Regular Home Maintenance",
    categories: ["home-maintenance"],
    excerpt: "Owning a home is a significant investment, and like any investment, it requires regular upkeep to maintain its value.",
    date: "September 3, 2024",
  },
  {
    slug: "summertime-home-maintenance-6-tips-for-a-trouble-free-season",
    title: "Summertime Home Maintenance: 6 Tips for a Trouble-Free Season",
    categories: ["home-maintenance"],
    excerpt: "As temperatures rise, maintaining your home becomes crucial to ensure comfort and prevent costly repairs later.",
    date: "May 14, 2024",
  },
  {
    slug: "the-costs-of-homeownership-beyond-your-mortgage-payment-what-you-can-expect-to-pay",
    title: "The Costs of Homeownership: Beyond Your Mortgage Payment, What You Can Expect to Pay",
    categories: ["home-maintenance"],
    excerpt: "Becoming a homeowner is a significant and exciting milestone, but it's essential to understand that the expenses extend far beyond the monthly mortgage payment.",
    date: "November 15, 2023",
  },
  {
    slug: "transform-your-home-this-spring-simple-yet-effective-refresh-ideas",
    title: "Transform Your Home This Spring: Simple Yet Effective Refresh Ideas",
    categories: ["home-improvement", "home-maintenance", "home-owner-tips", "home-trends"],
    excerpt: "As spring blossoms and breathes new life into our surroundings, it's the perfect opportunity to rejuvenate our homes.",
    date: "March 23, 2023",
  },
  {
    slug: "easy-storage-solutions-for-the-homeowner",
    title: "Easy Storage Solutions for the Homeowner",
    categories: ["home-maintenance", "home-owner-tips"],
    excerpt: "Have too much stuff cluttering your home? Here are a few helpful tips to make your home more storage-friendly.",
    date: "March 6, 2023",
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}

export function getPostsByCategory(categorySlug: string): BlogPost[] {
  return posts.filter((p) => p.categories.includes(categorySlug));
}

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}
