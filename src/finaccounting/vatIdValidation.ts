class vatId {
    public static isVatIdValid(vatId: string): boolean {
        const validVatCountries: Array<string> = [
            "AT","BE","BG","CY","CZ","DE","DK","EE","EL","ES","FI","FR","HR","HU","IE","IT",
            "LT","LU","LV","MT","NL","PL","PT","RO","SE","SI","SK","XI"
        ];

        // Regex for validating the VAT ID
        const regexVatId: { [key: string]: string } = {
            "AT": "/^ATU[0-9]{8}$/",
            "BE": "/^BE(0[0-9]{9}|1[0-9]{9})$/",
            "BG": "/^BG[0-9]{9,10}$/",
            "CY": "/^CY[0-9]{8}[A-Z]$/",
            "CZ": "/^CZ[0-9]{8,10}$/",
            "DE": "/^DE[0-9]{9}$/",
            "DK": "/^DK[0-9]{8}$/",
            "EE": "/^EE[0-9]{9}$/",
            "EL": "/^EL[0-9]{9}$/",
            "ES": "/^ES([A-Z][0-9]{8}|[0-9]{8}[A-Z]|[A-Z][0-9]{7}[A-Z])$/",
            "FI": "/^FI[0-9]{8}$/",
            "FR": "/^FR[A-Z0-9]{2}[0-9]{9}$/",
            "HR": "/^HR[0-9]{11}$/",
            "HU": "/^HU[0-9]{8}$/",
            "IE": "/^IE([0-9][A-Z][0-9]{5}[A-Z]|[0-9]{7}[A-Z]{1,2})$/",
            "IT": "/^IT[0-9]{11}$/",
            "LT": "/^LT([0-9]{9}|[0-9]{12})$/",
            "LU": "/^LU[0-9]{8}$/",
            "LV": "/^LV[0-9]{11}$/",
            "MT": "/^MT[0-9]{8}$/",
            "NL": "/^NL[0-9]{9}B[0-9]{2}$/",
            "PL": "/^PL[0-9]{10}$/",
            "PT": "/^PT[0-9]{9}$/",
            "RO": "/^RO[0-9]{2,10}$/",
            "SE": "/^SE[0-9]{10}01$/",
            "SI": "/^SI[0-9]{8}$/",
            "SK": "/^SK[0-9]{12}$/",
            "XI": "/^XI[0-9]{9}$/"
        };
        const vatIdCountry :string = vatId.slice(0, 2);

        // Check if the country is valid
        if (!validVatCountries.includes(vatIdCountry)) { return false; }

        // Check if the VAT ID is valid (According to the country)
        const vatRegex = new RegExp(regexVatId[vatIdCountry]);
        return vatRegex.test(vatId);
    }


}

export { vatId };