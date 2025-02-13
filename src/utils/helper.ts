export interface AboutItem {
    image: string;
    description: string;
}
export interface HeaderList {
    title: string;
    link: string;
}
export interface VisionData {
  id:number;
  title: string;
  text:string;
}
export interface ProjectData {
    image: string;
    description: string;
  }

export const HEADER_LIST: HeaderList[] = [
    {
        title: "Home",
        link: "#home",
    },
    {
        title: "Project",
        link: "#project",
    },
    {
        title: "Vision",
        link: "#vision",
    },
    {
        title: "Game-Fi",
        link: "#game",
    },
    {
        title: "Sport2Earn",
        link: "#sport",
    },
    {
        title: "Mint RoadMap",
        link: "#roadmap",
    },
    {
        title: "Utility",
        link: "#utility",
    },
    {
        title: "Team",
        link: "#team",
    },
    {
        title: "FAQs",
        link: "#faq",
    },
];
export const ABOUT_DATA: AboutItem[] = [
    {
        image: "/assets/images/svg/nft-icon.svg",
        description: "Smerse is the world’s first sport-to-earn NFT Avatar project that pays for doing sport.",
    },
    {
        image: "/assets/images/svg/coins-icon.svg",
        description: "Our users will be able to earn token rewards for completing fitness challenges around walking, jogging, running, or other exercises.",
    },
    {
        image: "/assets/images/svg/reward-icon.svg",
        description: "These rewards can then be used in-game to level up their Avatars, mint Avatar equipment, or they can be traded and rented to others.",
    },
    {
        image: "/assets/images/svg/nft-rewards.svg",
        description: "Users can earn additional rewards, including rare NFTs the more they engage in physical activity.",
    }
];
export const VISION_DATA: VisionData[] = [
    {
        id: 1,
        title: '01',
        text: 'Our vision is to inspire the world for a “whealthier” lifestyle by creating innovative, immersive, sport-to-earn fitness experiences. Smerse sits at the intersection of five markets, each of which has strong growth potential: NFTs, AR, VR, Health, DeFi.'
    },
    {
        id: 2,
        title: '02',
        text: 'As a result, we are moving one step further and creating the next generation of x-to-earn projects within the NFT and Web3 space that pays community members for remaining healthy and keeping active.'
    },
    {
        id: 3,
        title: '03',
        text: 'We believe in the value of social-fi & game-fi elements & strive to create a fitness experience unlike any other existing today. We will be partnering with top fitness brands & companies to create long-lasting partnerships that will enhance & create ease of access to fitness & health resources to our community members and NFT Holders.'
    }
];
export const PROJECT_DATA: ProjectData[] = [
    {
        image: "/assets/images/svg/nft-icon.svg",
        description: "NFT Avatars make up the core of the Smerse Project on the Ethereum Blockchain. Each male or female Avatar is unique itself & come with different traits upon minting & can further be customized with future additions on our In-App Marketplace.",
    },

    {
        image: "/assets/images/svg/hand-raise.svg",
        description: "Users will be able participate in various tasks to obtain augmented awards, airdrops, and special in-game incentives. Quests would be divided into daily, weekly, monthly, & special event categories. Each type will have its own set of benefits that contribute to playability & long-term engagement.",
    },

    {
        image: "/assets/images/svg/project-svg.svg",
        description: "Finally, players can earn marketable NFTs by completing various achievement goals, such as PvP and grinding times, which serves to generate a feeling of purpose inside the game rather than users merely playing for the sake of playing.",
    }
];