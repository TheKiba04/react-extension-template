import {join} from 'path';
import {rootDir} from './utils/env';

export default {
    popup:join(rootDir,'./src/pages/Popup/index.tsx'),
    background:join(rootDir,'./src/pages/Background/index.ts'),
    contentScript:join(rootDir,'./src/pages/Content/index.tsx'),
}
