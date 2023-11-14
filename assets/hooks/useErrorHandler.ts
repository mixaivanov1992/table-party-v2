import { isErrorWithMessage, isFetchBaseQueryError } from '@services/Helpers';

export const useErrorHandler = () => (err: unknown) => {
    if(isFetchBaseQueryError(err)){
        return 'error' in err ? err.error : JSON.stringify(err.data);
    }else if(isErrorWithMessage(err)){
        return err.message;
    }
    return 'unknown error';
}; 