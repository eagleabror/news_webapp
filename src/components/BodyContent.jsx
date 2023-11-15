import React from 'react'
import img1 from '../assets/example1.png'
import img2 from '../assets/example2.png'

const BodyContent = () => {
    const data = {
        "status": "ok",
        "totalResults": 274,
        "articles": [
            {
                "source": {
                    "id": null,
                    "name": "Sportskeeda"
                },
                "author": "Mridul Dutta",
                "title": "Why Oppressor Mk II is still overpowered in GTA Online - Sportskeeda",
                "description": "GTA Online players have an odd love-hate relationship with the Pegassi Oppressor Mk II.",
                "url": "https://www.sportskeeda.com/gta/why-oppressor-mk-ii-still-overpowered-gta-online",
                "urlToImage": "https://staticg.sportskeeda.com/editor/2023/11/8c349-16999482166356-1920.jpg",
                "publishedAt": "2023-11-14T08:18:00Z",
                "content": "GTA Online players have an odd love-hate relationship with the Pegassi Oppressor Mk II. On one hand, it is notorious as a griefers best friend, while on the other, it is among the most versatile vehi… [+2736 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Gadgets360.com"
                },
                "author": "David Delima, Siddharth Suvarna",
                "title": "Apple to Allow Users in the EU to Sideload iPhone Apps in H1 2024: Gurman - Gadgets 360",
                "description": "Apple will allow users in the European Union to sideload iPhone apps onto their smartphones, according to Bloomberg's Mark Gurman. iPhone owners will be able to install apps not accessible via the App Store for the first time, as the company has to adhere to …",
                "url": "https://www.gadgets360.com/mobiles/news/apple-allow-iphone-app-sideloading-eu-users-in-2024-report-4572637",
                "urlToImage": "https://i.gadgets360cdn.com/large/ios_17_apple_1686028512112.jpg",
                "publishedAt": "2023-11-14T08:16:10Z",
                "content": "Apple is working on allowing users in the European Union to sideload iPhone apps onto the company's smartphones, Bloomberg's Mark Gurman states in his weekly newsletter. The ability to install apps t… [+2063 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "India Today"
                },
                "author": "Ankita Chakravarti",
                "title": "Vivo Watch 3 with BlueOS, 16-day battery life launched: Check price, specifications - India Today",
                "description": "Vivo has launched the Vivo Watch 3, a new smartwatch offering an array of health and fitness tracking capabilities, a durable design, and a long battery life. The watch, which has yet to launch in India, also features Vivo's proprietary BlueOS operating syste…",
                "url": "https://www.indiatoday.in/technology/news/story/vivo-watch-3-with-blueos-16-day-battery-life-launched-check-price-specifications-2462674-2023-11-14",
                "urlToImage": "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202311/vivo-watch-3-144507716-16x9_0.jpg?VersionId=MtjVWwu9Fwm8F.wKqqG92Dxe99q_BtQQ",
                "publishedAt": "2023-11-14T07:45:41Z",
                "content": "Vivo has unveiled its latest smartwatch, the Vivo Watch 3, alongside the launch of its flagship X100 series smartphones. This new offering succeeds the Watch 2 that made its debut back in 2021. The V… [+2068 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Sparrowsnews.com"
                },
                "author": "Kamlesh Bhati",
                "title": "Honor 100 Series Design And Release Date Announced | SPARROWS NEWS - Sparrows News",
                "description": "In an exciting announcement, Honor has officially initiated the preheating phase for its highly anticipated Honor 100 series of smartphones. The grand",
                "url": "https://sparrowsnews.com/2023/11/14/honor-100-series-design-and-release-date/",
                "urlToImage": "https://i0.wp.com/sparrowsnews.com/wp-content/uploads/2023/11/wp-1699947695131.webp",
                "publishedAt": "2023-11-14T07:44:18Z",
                "content": "In an exciting announcement, Honor has officially initiated the preheating phase for its highly anticipated Honor 100 series of smartphones. The grand unveiling is set to take place on November 23, p… [+1638 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Sportskeeda"
                },
                "author": "Mridul Dutta",
                "title": "30 GTA 6 features reportedly confirmed from leaks and rumours - Sportskeeda",
                "description": "Many fans eagerly await what new things Rockstar Games will add in GTA 6.",
                "url": "https://www.sportskeeda.com/gta/30-gta-6-features-reportedly-confirmed-leaks-rumours",
                "urlToImage": "https://staticg.sportskeeda.com/editor/2023/11/b1b58-16999419964940-1920.jpg",
                "publishedAt": "2023-11-14T07:36:00Z",
                "content": "Many fans eagerly await what new things Rockstar Games will add in GTA 6. An underdeveloped version of the game was leaked in September 2022, disclosing many features and important details that the s… [+4267 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Investing.com"
                },
                "author": "IANS",
                "title": "Samsung unveils its own generative AI model 'Gauss' - Investing.com India",
                "description": "The Financial News section features stock market news in addition to stories about bonds, forex, commodities and economic releases.",
                "url": "https://in.investing.com/news/samsung-unveils-its-own-generative-ai-model-gauss-3901015",
                "urlToImage": "https://i-invdn-com.investing.com/news/https://i-invdn-com.investing.com/akapi-images/800x450/9dad1ee353d5b697a33108fed4dcda28_w_800_h_450.jpg",
                "publishedAt": "2023-11-14T07:20:46Z",
                "content": "Seoul, Nov 14 (IANS) Samsung Electronics (KS:\r\n005930\r\n) on Tuesday showcased its latest updates to software and services, including its new generative artificial intelligence (AI) model, Samsung Gau… [+1779 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "GSMArena.com"
                },
                "author": "Yordan",
                "title": "Red Magic 9 Pro will have a flat display, no camera bumps - GSMArena.com news - GSMArena.com",
                "description": "We can also see the cooling vent on the side. The Red Magic 9 Pro will arrive on November 23, and the gaming branch of nubia started with the teasers. The...",
                "url": "https://www.gsmarena.com/red_magic_9_pro_will_have_a_flat_display_no_camera_bumps-news-60571.php",
                "urlToImage": "https://fdn.gsmarena.com/imgroot/news/23/11/zte-nubia-red-magic-9-pro-profile/-952x498w6/gsmarena_001.jpg",
                "publishedAt": "2023-11-14T07:17:01Z",
                "content": "The Red Magic 9 Pro will arrive on November 23, and the gaming branch of nubia started with the teasers. The first one is the side view of the smartphone, revealing it will be flat on both sides no c… [+835 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Gadgets360.com"
                },
                "author": "David Delima, Siddharth Suvarna",
                "title": "WhatsApp Rolls Out Voice Chat Feature for Less Disruptive Group Calls: How It Works - Gadgets 360",
                "description": "WhatsApp is rolling out voice chats, a new feature that makes group calls on the messaging service less intrusive. Instead of ringing members' devices, voice chats will be less intrusive and allow group members who are in a conversation to perform other tasks…",
                "url": "https://www.gadgets360.com/apps/news/whatsapp-voice-chat-feature-rolling-out-bigger-groups-4572411",
                "urlToImage": "https://i.gadgets360cdn.com/large/whatspp_voice_chats_meta_1699942430392.jpg",
                "publishedAt": "2023-11-14T07:02:51Z",
                "content": "WhatsApp has begun rolling out a new voice chat feature that will offer an improved experience while making group calls on the messaging service. Currently, group calls ring members' devices, which m… [+1862 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Editorji.com"
                },
                "author": "Editorji News Desk",
                "title": "Vivo X100, Vivo X100 Pro launched with Dimensity 9300, Zeiss Optics: Explore prices & specs - Editorji",
                "description": "Explore the Vivo X100 Pro and X100, newly launched in China with MediaTek Dimensity 9300 SoC, Android 14, Zeiss cameras, and a 6.78-inch AMOLED display. These high-end models offer advanced features in the competitive smartphon...",
                "url": "https://www.editorji.com/tech-news/mobiles/vivo-x100-vivo-x100-pro-launched-with-dimensity-9300-zeiss-optics-explore-prices-specs-1699945135418",
                "urlToImage": "https://cdn.editorji.com/ptF9l8lwii.jpg",
                "publishedAt": "2023-11-14T06:58:55Z",
                "content": "The Vivo X100 Pro and Vivo X100 have recently launched in China, bringing exciting features to the smartphone market. These phones are powered by the new MediaTek Dimensity 9300 SoC and run on the la… [+3582 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "India TV News"
                },
                "author": "Edited by Vishal Upadhyay",
                "title": "Garena Free Fire Max codes for November 14 revealed: Check codes, how to redeem, and more - India TV News",
                "description": "Looking for Free Fire Max codes for today? Go to reward.ff.garena.com, and use codes (like ZFIXDVTSLSC) for cool stuff like premium bundles and diamonds!",
                "url": "https://www.indiatvnews.com/technology/news/garena-free-fire-max-daily-codes-14-november-for-weapons-diamonds-and-more-2023-11-14-902658",
                "urlToImage": "https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2023/11/garena-free-fire-codes-for-14-november-1699944291.jpg",
                "publishedAt": "2023-11-14T06:54:51Z",
                "content": "Garena Free Fire Max fans, gear up for today's exclusive redeem codes! Accessible on the official website reward.ff.garena.com, these 12-character alphanumeric codes unlock awesome things like outfit… [+1554 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Zee Business"
                },
                "author": "ZeeBiz WebTeam",
                "title": "Buy Apple iPhone 13 for just Rs 999 on Flipkart - Check Details - Zee Business",
                "description": "While most of the Diwali offers on smartphones are now over, theres still a chance to buy the iPhone 13 at the lowest price.",
                "url": "https://www.zeebiz.com/technology/news-apple-iphone-13-128gb-price-in-india-flipkart-offer-hdfc-bank-exchange-offer-264247",
                "urlToImage": "https://cdn.zeebiz.com/sites/default/files/2023/11/14/268956-iphone13flipkart.jpg",
                "publishedAt": "2023-11-14T06:50:54Z",
                "content": "Apple iPhone 13 Series was the first to come with a diagonal rear camera design. The Cupertino-based tech company is still carrying the same design. So iPhone 13 can be the best option for those who … [+1267 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Push Square"
                },
                "author": "Sammy Barker",
                "title": "Audio Experts Are in Love with PS5's New Pulse Explore Earbuds - Push Square",
                "description": "\"Absurdly good\"",
                "url": "https://www.pushsquare.com/news/2023/11/audio-experts-are-in-love-with-ps5s-new-pulse-explore-earbuds",
                "urlToImage": "https://images.pushsquare.com/6eefdee4f8c9b/1280x720.jpg",
                "publishedAt": "2023-11-14T06:45:00Z",
                "content": "Image: Push Square\r\nSony is significantly expanding PS5s product portfolio this Christmas, with the release of the Remote Play handheld PS Portal and a couple of new headphone options. One such produ… [+2192 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Hindustan Times"
                },
                "author": "Bloomberg",
                "title": "Alphabet CEO Sundar Pichai to testify in Google Play trial today - Hindustan Times",
                "description": "Alphabet Inc. CEO Sundar Pichai will testify next week in a trial against Epic Games over Google Play app store policies.",
                "url": "https://www.hindustantimes.com/technology/alphabet-ceo-sundar-pichai-to-testify-in-google-play-trial-today-101699942627451.html",
                "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/11/14/1600x900/APTOPIX-Google-Antitrust-Showdown-0_1699942822465_1699942879715.jpg",
                "publishedAt": "2023-11-14T06:30:14Z",
                "content": "Alphabet Inc. Chief Executive Officer Sundar Pichai on Tuesday is set to face a jury to defend Google Play app store policies that are at the heart of a high-stakes antitrust fight with Epic Games In… [+1729 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Hindustan Times"
                },
                "author": "HT Tech",
                "title": "From sparking powerful solar storms to causing forest fires, know the dangers of solar winds - HT Tech",
                "description": "Solar winds have been associated with solar storms, but recent studies also point out their involvement in large forest fires. Know the threats of this stellar wind and the different ways it impacts us.",
                "url": "https://tech.hindustantimes.com/tech/news/from-sparking-powerful-solar-storms-to-causing-forest-fires-know-the-dangers-of-solar-winds-71699939928200.html",
                "urlToImage": "https://images.hindustantimes.com/tech/img/2023/11/14/1600x900/NOAA_1632590234307_1699940037820.JPG",
                "publishedAt": "2023-11-14T05:42:14Z",
                "content": "Solar winds have been part of the reason behind the recent series of solar storms that have struck the Earth in the last couple of weeks. They either sparked solar storm incidents or amplified an act… [+2785 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "9to5google.com"
                },
                "author": "Abner Li",
                "title": "Samsung's Android devices accounted for 'half or more' of Google Play revenue - 9to5Google",
                "description": "As the Epic v. Google lawsuit continues, we learned that Samsung devices accounted for \"half or more\" of Google Play revenue...",
                "url": "https://9to5google.com/2023/11/13/samsung-google-play-revenue/",
                "urlToImage": "https://i0.wp.com/9to5google.com/wp-content/uploads/sites/4/2023/08/Android-3D-logo-2023.png?resize=1200%2C628&quality=82&strip=all&ssl=1",
                "publishedAt": "2023-11-14T05:21:00Z",
                "content": "As the Epic v. Google lawsuit continues, we learned today that Samsung devices, as of early 2019, accounted for “half or more” of Google Play revenue.\r\nThis was revealed in testimony today (via Bloom… [+1612 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Insidesport.in"
                },
                "author": "Aditya Parsutkar",
                "title": "The Game Awards 2023 announces nominees for all categories, check here - InsideSport",
                "description": "The Game Awards 2023 has revealed over 30 categories, including Game of the Year and Esports Game of the Year to Content Creator of the Year",
                "url": "https://www.insidesport.in/the-game-awards-2023-announces-nominees-for-all-categories-check-here/",
                "urlToImage": "https://www.insidesport.in/wp-content/uploads/2023/11/9XGQXe3NEiQ-HD.jpg",
                "publishedAt": "2023-11-14T02:48:13Z",
                "content": "The Game Awards 2023 has revealed over 30 categories, including Game of the Year and Esports Game of the Year to Content Creator of the Year and more.Geoff Keighley, the host of The Game Awards 2023,… [+8345 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "GSMArena.com"
                },
                "author": "Vlad",
                "title": "Here are Google's Black Friday deals, going live this Thursday - GSMArena.com news - GSMArena.com",
                "description": "You can save $400 on the Pixel Fold. Today Google has published its Black Friday deals that will become available through its online store in the US this...",
                "url": "https://www.gsmarena.com/here_are_googles_black_friday_deals_going_live_this_thursday-news-60570.php",
                "urlToImage": "https://fdn.gsmarena.com/imgroot/news/23/11/google-black-friday-deals/-952x498w6/gsmarena_000.jpg",
                "publishedAt": "2023-11-14T02:45:01Z",
                "content": "Today Google has published its Black Friday deals that will become available through its online store in the US this Thursday - because starting Black Friday deals on a Thursday makes perfect sense (… [+1160 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "digitalspy.com"
                },
                "author": "Jess Lee",
                "title": "Alan Wake 2 and Baldur's Gate 3 lead 2023 Game Awards nominations - Digital Spy",
                "description": "A really strong year for games.",
                "url": "https://www.digitalspy.com/tech/a45828471/game-awards-2023-nominations/",
                "urlToImage": "https://hips.hearstapps.com/hmg-prod/images/baldurs-gate-3-laezel-65171f928416c.jpg?crop=1.00xw:0.895xh;0,0.0114xh&resize=1200:*",
                "publishedAt": "2023-11-14T02:13:09Z",
                "content": "Alan Wake 2 and Baldur's Gate 3 lead the 2023 Game Awards with eight nominations each.\r\nBoth acclaimed games are in the running for Game of the Year. Also nominated for the top prize are Marvel's Spi… [+3399 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Emsnow.com"
                },
                "author": "Jennifer Read",
                "title": "India Smartphone Market Remained Flat YoY in 3Q23 with 44 Million Units, Says IDC · EMSNow - EMSNow",
                "description": "INDIA – According to the International Data Corporation ’s (IDC) Worldwide Quarterly Mobile Phone Tracker, India’s smartphone market remained flat YoY",
                "url": "https://www.emsnow.com/india-smartphone-market-remained-flat-yoy-in-3q23-with-44-million-units-says-idc/",
                "urlToImage": "https://www.emsnow.com/wp-content/uploads/2020/09/EMSnow-logo-1200x630-1-e1623708589690.png",
                "publishedAt": "2023-11-14T02:12:38Z",
                "content": "INDIA  According to the International Data Corporation s (IDC) Worldwide Quarterly Mobile Phone Tracker, Indias smartphone market remained flat YoY (year-over-year), shipping 44 million units in 3Q23… [+3857 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Sportskeeda"
                },
                "author": "Edward Hays",
                "title": "5 best Minecraft servers like Hoplite - Sportskeeda",
                "description": "Minecraft has been around for over a decade, and the number of players is growing every day. It's not surprising that there are a lot of servers for the game, given its large fanbase.",
                "url": "https://www.sportskeeda.com/minecraft/5-best-minecraft-servers-like-hoplite",
                "urlToImage": "https://staticg.sportskeeda.com/editor/2023/11/19152-16998928185938-1920.jpg",
                "publishedAt": "2023-11-14T01:15:00Z",
                "content": "Minecraft has been around for over a decade, and the number of players is growing every day. It's not surprising that there are a lot of servers for the game, given its large fanbase. Among them, Hop… [+4250 chars]"
            }
        ]
    }
    return (
        <>
            <div className='flex lg:flex-row flex-col gap-8 mt-[48px]'>
                <div className='p-4 flex flex-col'>s
                    {data.articles.slice(6, 7).map(da => {
                        return (
                            <>
                                <div>
                                    <h1 className='text-[3.5rem] text-white'>
                                        {da.title}
                                    </h1>
                                </div>
                                <div className='p-4 w-[100%] h-[100%]'>
                                    <img src={da.urlToImage} height={'50px'} style={{height: "200px", width: "100%"}}/>
                                </div>
                                <p className='text-white'>Space and Universe | Daniel Albarta | October 22, 2023</p>
                            </>
                        )
                    })}
                </div>
                <div className='flex flex-col gap-10 p-4 md:w-[70%]'>
                    {data.articles.slice(0, 4).map(d => {
                        return (
                            <>
                                <a href={d.url} className="flex flex-col items-center md:flex-row hover:bg-gray-700" target='_blank'>
                                    <img className="w-[50%] h-50" src={d.urlToImage} alt="" />
                                    <div className="flex flex-col justify-between p-2 leading-normal">
                                        <h5 className="text-[12px] font-bold tracking-tight text-gray-900 dark:text-gray-400">{d.title.slice(0, 20)}...</h5>
                                        <p className="font-normal text-gray-700 dark:text-gray-400">{d.description.slice(0, 40)}</p>
                                        <span className='text-sm text-gray-500'>{d.publishedAt.slice(0, 10)}</span>
                                    </div>
                                </a>
                            </>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default BodyContent