import { wretchInstance }                                                                                                                                                        from '../index';
import { CreateOrganizationRequest, Organization, UpdateOrganizationEmailRequest, UpdateOrganizationLogoRequest, UpdateOrganizationNameRequest, UpdateOrganizationPhoneRequest } from './types';





export const organizationApi = {
    // Create a new organization
    create: async (data: CreateOrganizationRequest) => {
        return wretchInstance.post(data, '/organization',).json<Organization>();
    },
    
    // Update organization name
    updateName: async (organizationId: string, data: UpdateOrganizationNameRequest) => {
        return wretchInstance.patch(data, `/organization/update/name/${ organizationId }`).json<Organization>();
    },
    
    // Update organization email
    updateEmail: async (organizationId: string, data: UpdateOrganizationEmailRequest) => {
        return wretchInstance.patch(data, `/organization/update/email/${ organizationId }`).json<Organization>();
    },
    
    // Update organization phone
    updatePhone: async (organizationId: string, data: UpdateOrganizationPhoneRequest) => {
        return wretchInstance.patch(data, `/organization/update/phone/${ organizationId }`).json<Organization>();
    },
    
    // Update organization logo
    updateLogo: async (organizationId: string, data: UpdateOrganizationLogoRequest) => {
        return wretchInstance.patch(`/organization/update/logo/${ organizationId }`).json<Organization>();
    },
    
    // Update organization status to active
    setStatusActive: async (organizationId: string) => {
        return wretchInstance.patch(`/organization/update/status/active/${ organizationId }`).json<Organization>();
    },
    
    // Update organization status to deactivated
    setStatusDeactivated: async (organizationId: string) => {
        return wretchInstance.patch(`/organization/update/status/deactivated/${ organizationId }`).json<Organization>();
    },
    
    // Update organization status to suspended
    setStatusSuspended: async (organizationId: string) => {
        return wretchInstance.patch(`/organization/update/status/suspended/${ organizationId }`).json<Organization>();
    },
    
    // Get organization profile by ID
    getProfile: async (organizationId: string) => {
        return wretchInstance.get(`/organization/profile/${ organizationId }`).json<Organization>();
    },
};
