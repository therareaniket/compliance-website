import { fetchGraphQL } from '@/lib/graphql';
import React from 'react'
import Link from "next/link";
import AboutComponent from '@/components/AboutPageComponent';


type AboutData = {
    page: {
        aboutpage: {
            aboutHeroTitle: string;
            aboutHeroSubtitle: string;

            missionSubtitle: string;
            missionPoints: {
                point1Title: string;
                point1Subtitle: string;

                point2Title: string;
                point2Subtitle: string;

                point3Title: string;
                point3Subtitle: string;

                point4Title: string;
                point4Subtitle: string;
            }

            visionSubtitle: string;
            visionPoints: {
                point1Title: string;
                point1Subtitle: string;

                point2Title: string;
                point2Subtitle: string;

                point3Title: string;
                point3Subtitle: string;

                point4Title: string;
                point4Subtitle: string;
            }

            platformSupportTitle: string;
            platformSupportSubtitle: string;
        }
    }
}

type HomeData = {
    page: {
        homepage: {
            ctaTitle: string;
            ctaLink1?: { url: string; title: string } | null;
            ctaLink2?: { url: string; title: string } | null;
            ctaLink3?: { url: string; title: string } | null;
        };
    };
};

export default async function AboutUs() {
    const data = await fetchGraphQL<AboutData>(`
        query {
            page(id: "/aboutpage", idType: URI) {
                aboutpage {
                    aboutHeroTitle
                    aboutHeroSubtitle

                    missionSubtitle
                    missionPoints {
                        point1Title
                        point1Subtitle
                        point2Title
                        point2Subtitle
                        point3Title
                        point3Subtitle
                        point4Title
                        point4Subtitle
                    }

                    visionSubtitle
                    visionPoints {
                        point1Title
                        point1Subtitle
                        point2Title
                        point2Subtitle
                        point3Title
                        point3Subtitle
                        point4Title
                        point4Subtitle
                    }
                    
                    platformSupportTitle
                    platformSupportSubtitle
                }
            }
        }
    `);

    const ctadata = await fetchGraphQL<HomeData>(`
        query {
            page(id: "/", idType: URI) {
                homepage {
                    ctaTitle
                    ctaLink1 { url  title }
                    ctaLink2 { url  title }
                    ctaLink3 { url  title }
                }
            }
        }
    `);

    const about = data.page.aboutpage;
    const ctahome = ctadata.page.homepage;


    return (
        <>
        <AboutComponent 
            aboutHeroTitle={about.aboutHeroTitle} 
            aboutHeroSubtitle={about.aboutHeroSubtitle} 
            missionSubtitle={about.missionSubtitle} 
            missionPoints={{
                point1Title: about.missionPoints.point1Title,
                point1Subtitle: about.missionPoints.point1Subtitle,
                point2Title: about.missionPoints.point2Title,
                point2Subtitle: about.missionPoints.point2Subtitle,
                point3Title: about.missionPoints.point3Title,
                point3Subtitle: about.missionPoints.point3Subtitle,
                point4Title: about.missionPoints.point4Title,
                point4Subtitle: about.missionPoints.point4Subtitle,
            }}
            visionSubtitle={about.visionSubtitle} 
            visionPoints={{
                point1Title: about.visionPoints.point1Title,
                point1Subtitle: about.visionPoints.point1Subtitle,
                point2Title: about.visionPoints.point2Title,
                point2Subtitle: about.visionPoints.point2Subtitle,
                point3Title: about.visionPoints.point3Title,
                point3Subtitle: about.visionPoints.point3Subtitle,
                point4Title: about.visionPoints.point4Title,
                point4Subtitle: about.visionPoints.point4Subtitle,
            }}
            platformSupportTitle={about.platformSupportTitle}
            platformSupportSubtitle={about.platformSupportSubtitle}
        />

                    {/* <section className="section hm-cta relative z-[2]">
                        <div className="container">
                            <h2 className="h3 text-center">{ctahome.ctaTitle}</h2>

                            <div className="cta-links text-center">
                                <Link href={ctahome.ctaLink1?.url as string} title={ctahome.ctaLink1?.title} className="btn-padding btn-primary text-md text-18 site-radius-10">{ctahome.ctaLink1?.title}</Link>

                                <Link href={ctahome.ctaLink2?.url as string} title={ctahome.ctaLink2?.title} className="btn-padding btn-white text-md text-18 site-radius-10">{ctahome.ctaLink2?.title}</Link>

                                <Link href={ctahome.ctaLink3?.url as string} title={ctahome.ctaLink3?.title} className="btn-padding btn-white text-md text-18 site-radius-10">{ctahome.ctaLink3?.title}</Link>
                            </div>
                        </div>
                    </section> */}

        </>
    )
}
