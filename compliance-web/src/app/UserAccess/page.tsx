import React from 'react'
import UserAccessComponent from '@/components/UserAccessPageComponent'
import { fetchGraphQL } from '@/lib/graphql';

type UserAccessData = {
    page: {
        useraccess: {
            userAccessHeroTitle: string;
            userAccessHeroSubtitle: string;

            rolesTitle: string;
            userRoleList: {
                adminSubtitle: string;
                adminResponsibility1: string;
                adminResponsibility2: string;
                adminResponsibility3: string;

                officerSubtitle: string;
                officerResponsibility1: string;
                officerResponsibility2: string;
                officerResponsibility3: string;

                contributorSubtitle: string;
                contributorResponsibility1: string;
                contributorResponsibility2: string;
                contributorResponsibility3: string;

                auditorSubtitle: string;
                auditorResponsibility1: string;
                auditorResponsibility2: string;
                auditorResponsibility3: string;
            }

            onboardingTitle: string;
            onboardingSubtitle: string;

        }
    }
}

export default async function UserAccess() {

    const data = await fetchGraphQL<UserAccessData>(`
        query {
            page(id: "/useraccess", idType: URI) {
                useraccess {
                    userAccessHeroTitle
                    userAccessHeroSubtitle

                    rolesTitle
                    userRoleList {
                        adminSubtitle
                        adminResponsibility1
                        adminResponsibility2
                        adminResponsibility3

                        officerSubtitle
                        officerResponsibility1
                        officerResponsibility2
                        officerResponsibility3

                        contributorSubtitle
                        contributorResponsibility1
                        contributorResponsibility2
                        contributorResponsibility3

                        auditorSubtitle
                        auditorResponsibility1
                        auditorResponsibility2
                        auditorResponsibility3
                    }

                    onboardingTitle
                    onboardingSubtitle
                }
            }
        }
    `);

    const useraccess = data.page.useraccess;

    return (
        <>
            <UserAccessComponent
                userAccessHeroTitle={useraccess.userAccessHeroTitle} userAccessHeroSubtitle={useraccess.userAccessHeroSubtitle} rolesTitle={useraccess.rolesTitle}
                adminSubtitle={useraccess.userRoleList.adminSubtitle} adminResponsibility1={useraccess.userRoleList.adminResponsibility1} adminResponsibility2={useraccess.userRoleList.adminResponsibility2} adminResponsibility3={useraccess.userRoleList.adminResponsibility3}
                officerSubtitle={useraccess.userRoleList.officerSubtitle} officerResponsibility1={useraccess.userRoleList.officerResponsibility1} officerResponsibility2={useraccess.userRoleList.officerResponsibility2} officerResponsibility3={useraccess.userRoleList.officerResponsibility3}
                contributorSubtitle={useraccess.userRoleList.contributorSubtitle} contributorResponsibility1={useraccess.userRoleList.contributorResponsibility1} contributorResponsibility2={useraccess.userRoleList.contributorResponsibility2} contributorResponsibility3={useraccess.userRoleList.contributorResponsibility3}
                auditorSubtitle={useraccess.userRoleList.auditorSubtitle} auditorResponsibility1={useraccess.userRoleList.auditorResponsibility1} auditorResponsibility2={useraccess.userRoleList.auditorResponsibility2} auditorResponsibility3={useraccess.userRoleList.auditorResponsibility3}
                onboardingTitle={useraccess.onboardingTitle} onboardingSubtitle={useraccess.onboardingSubtitle}
            />
        </>
    )
}