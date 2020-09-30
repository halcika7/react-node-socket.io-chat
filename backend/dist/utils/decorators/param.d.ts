export declare const Req: () => ParameterDecorator;
export declare const Res: () => ParameterDecorator;
export declare const Next: () => ParameterDecorator;
export declare const Cookie: (cookieName?: string | undefined) => ParameterDecorator;
export declare const Headers: (headerName?: string | undefined) => ParameterDecorator;
export declare const Query: (queryParamName?: string | undefined) => ParameterDecorator;
export declare const Body: () => ParameterDecorator;
export declare const Param: (paramName?: string | undefined) => ParameterDecorator;
