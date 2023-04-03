export interface UserBasicInfo{
    phone1: string,
    phone2: string,
    activated: boolean,
    email: string,
    password: string,
    contactName: string,
}
export interface UserAdvancedInfo{
    sectorId: any,
    agreeCommercials: any,
    originPage: number,
    commercialAgentId: any,
    customerCategoryId: number,
    fareRateId: number,
    sendCsvDaily: boolean,
    sendCsvWeekly: boolean,
    dataCsvFtp: string,
    refererTypeId: number,
    refererOthersInfo: string,
    performanceTypeId: number,
    observations: string,
    canContactPhone: boolean,
    canSendMail: boolean,
    contactTime: string,
    numberAccessWeb: number,
    preferredCompanyBankAccountId: any,
    eccomerceId: any,
    downloadCsv: boolean,
    ordersOnlyPaymentProof: boolean,
    ordersOnlyMoneyInAccount: boolean,
    deleted: boolean,
    createdBy: string,
    createdDate: string,
    lastModifiedBy: string,
    lastModifiedDate: string
}
export interface UserData extends UserBasicInfo{
    id:number
}
export interface UserList {
    totalElements: number,
    totalPages: number,
    pageNumber: number,
    isLast: boolean,
    isFirst: boolean,
    pageSize: number,
    content: [UserData]
}




 
 