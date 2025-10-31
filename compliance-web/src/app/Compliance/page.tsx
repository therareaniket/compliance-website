import React from 'react'
import ComplianceComponent from '@/components/CompliancePageComponent';
import { fetchGraphQL } from '@/lib/graphql';

type ComplianceData = {
    page: {
        compliancepage: {
            complianceHeroTitle: string;
            complianceHeroSubtitle: string;
            titleComplianceMatters: string;
            subtitleComplianceMatters1: string;
            subtitleComplianceMatters2: string;
        }
    }
}

export default async function ComplianceListing() {

    const data = await fetchGraphQL<ComplianceData>(`
        query {
            page(id: "/compliance", idType: URI) {
                compliancepage {
                   complianceHeroTitle
                   complianceHeroSubtitle
                   titleComplianceMatters
                   subtitleComplianceMatters1
                   subtitleComplianceMatters2
                }
            }
        }
    `);

    const compliance = data.page.compliancepage

    return(
        <>
            <ComplianceComponent complianceHeroTitle={compliance.complianceHeroTitle} complianceHeroSubtitle={compliance.complianceHeroSubtitle} titleComplianceMatters={compliance.titleComplianceMatters} subtitleComplianceMatters1={compliance.subtitleComplianceMatters1} subtitleComplianceMatters2={compliance.subtitleComplianceMatters2} />
        </>
    );
}
