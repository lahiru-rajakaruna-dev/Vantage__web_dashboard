// --- Base Types ---
export type OrganizationStatus =
    'ACTIVE'
    | 'DEACTIVATED'
    | 'TRIAL'
    | 'SUSPENDED';
export type SubscriptionStatus =
    'VALID'
    | 'EXPIRED';
export type PaymentStatus =
    'PENDING'
    | 'PAID'
    | 'VERIFIED'
    | 'REFUNDED';
export type ClientAccountStatus =
    'ACTIVE'
    | 'DEACTIVATED'
    | 'UNVERIFIED';


// --- Organization ---
export interface Organization {
    organization_id: string;
    organization_admin_id: string;
    organization_stripe_customer_id: string;
    organization_name: string;
    organization_admin_email: string;
    organization_admin_phone: string;
    organization_logo_url: string;
    organization_registration_date: number;
    organization_subscription_end_date: number;
    organization_status: OrganizationStatus;
    organization_subscription_status: SubscriptionStatus;
}


export interface CreateOrganizationRequest {
    organization_name: string;
    organization_admin_email: string;
    organization_admin_phone: string;
    organization_logo_url?: string;
}


export interface UpdateOrganizationNameRequest {
    organization_name: string;
}


export interface UpdateOrganizationEmailRequest {
    organization_admin_email: string;
}


export interface UpdateOrganizationPhoneRequest {
    organization_admin_phone: string;
}


export interface UpdateOrganizationLogoRequest {
    organization_logo_url: string;
}


// --- Employee ---
export interface Employee {
    employee_id: string;
    employee_organization_id: string;
    employee_sales_group_id?: string | null;
    employee_first_name?: string | null;
    employee_last_name?: string | null;
    employee_phone?: string | null;
    employee_nic_number: string;
    employee_active_territory?: string | null;
    employee_registration_date: number;
}


export interface CreateEmployeeRequest {
    employee_nic_number: string;
    employee_password: string
}


export interface UpdateEmployeeNameRequest {
    employee_first_name: string;
    employee_last_name: string;
}


export interface UpdateEmployeePhoneRequest {
    employee_phone: string;
}


export interface UpdateEmployeeNicRequest {
    employee_nic_number: string;
}


export interface UpdateEmployeeSalesGroupRequest {
    employee_sales_group_id: string;
}


export interface UpdateEmployeeTerritoryRequest {
    employee_active_territory: string;
}


// --- Sales Group ---
export interface SalesGroup {
    sales_group_id: string;
    sales_group_organization_id: string;
    sales_group_name: string;
    sales_group_territory: string;
}


export interface SalesGroupWithEmployees extends SalesGroup {
    sales_group_employees: Array<Employee & { employee_sales: Sale[] }>;
}


export interface CreateSalesGroupRequest {
    sales_group_name: string;
    sales_group_territory: string;
}


export interface UpdateSalesGroupNameRequest {
    sales_group_name: string;
}


export interface UpdateSalesGroupTerritoryRequest {
    sales_group_territory: string;
}


// --- Item ---
export interface Item {
    item_id: string;
    item_organization_id: string;
    item_name: string;
    item_stock_unit_count: number;
}


export interface CreateItemRequest {
    item_name: string;
    item_stock_unit_count?: number;
}


export interface UpdateItemNameRequest {
    item_name: string;
}


export interface UpdateItemStockRequest {
    item_stock_unit_count: number;
}


// --- Client ---
export interface Client {
    client_id: string;
    client_organization_id: string;
    client_stripe_customer_id: string;
    client_name: string;
    client_nic_number: string;
    client_email: string;
    client_phone: string;
    client_account_status: ClientAccountStatus;
    client_registration_date: number;
}


export interface CreateClientRequest {
    client_name: string;
    client_nic_number: string;
    client_email: string;
    client_phone: string;
}


export interface UpdateClientNameRequest {
    client_name: string;
}


export interface UpdateClientNicRequest {
    client_nic_number: string;
}


export interface UpdateClientPhoneRequest {
    client_phone: string;
}


// --- Client Payment ---
export interface ClientPayment {
    client_payment_id: string;
    client_payment_client_id: string;
    client_payment_organization_id: string;
    client_payment_amount: number;
    client_payment_date: number;
    client_payment_status: PaymentStatus;
}


export interface CreateClientPaymentRequest {
    client_payment_client_id: string;
    client_payment_amount: number;
}


export interface UpdateClientPaymentAmountRequest {
    client_payment_amount: number;
}


// --- Organization Payment ---
export interface OrganizationPayment {
    payment_id: string;
    payment_organization_id: string;
    payment_amount: number;
    payment_status: PaymentStatus;
    payment_timestamp: number;
}


export interface CreateOrganizationPaymentRequest {
    payment_amount: number;
}


export interface UpdateOrganizationPaymentAmountRequest {
    payment_amount: number;
}


// --- Sale ---
export interface Sale {
    sale_id: string;
    sale_organization_id: string;
    sale_employee_id: string;
    sale_client_id: string;
    sale_client_payment_id: string;
    sale_item_id: string;
    sale_item_unit_count: number;
    sale_date: number;
}


export interface CreateSaleRequest {
    sale_employee_id: string;
    sale_client_id: string;
    sale_client_payment_id: string;
    sale_item_id: string;
    sale_item_unit_count: number;
}


// --- API Response Types ---
export interface ApiResponse<T> {
    data?: T;
    error?: string;
    message?: string;
}
