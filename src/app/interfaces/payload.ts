export interface Payload {
    container: {
        componentId: string;
        content: {
            parametersTable: {
                componentId: string,
                config: {
                    values: Array<Array<string>>
                },
                table: {
                    columns: []
                }
            }
        }
    }
}