import '@controller/Auth';
declare class App {
    private readonly app;
    private readonly port;
    private readonly url;
    private readonly env;
    private readonly logger;
    private server;
    constructor();
    private setAppMiddlewares;
    start(): Promise<void>;
}
export default App;
