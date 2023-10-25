import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { blockRouterMetaData as blockRouterMetaDataJsVariables1 } from './Exercise-js-variables-1/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsVariables2 } from './Exercise-js-variables-2/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsFunction1 } from './Exercise-js-functions/router-data';
import { EmptyValuesAndStringsMetaData } from './EmptyValuesAndStrings/router-data';
import { stringMethodsMetaData } from './StringMethods/router-data';
import { ExerciseJsArrayBasicsMetaData } from './Exercise-js-arrays basics/router-data';
import { ObjectsBasicsMetaData } from './ObjectsBasics/router-data';
import { dateTimeMetaData } from './JsDateTime/router-data';
import { jsExtensionMetaData } from './JsExtension/router-data';
import { jsSetTimeoutMetaData } from './JsSetTimeout/router-data';
import { jsSetIntervalMetaData } from './JsSetInterval/router-data';
import { VanishStringMetaData } from './VanishString/router-data';
import { TimerMetaData } from './Timer/router-data';
import { oopMetaData } from './OOP/router-data';
import { TryCatchMetaData } from './TryCatch/router-data';
import { TryCatchExerciseMetaData } from './TryCatchExercise/router-data';

export const blockRouterMetaData = [
  blockRouterMetaDataJsVariables1,
  blockRouterMetaDataJsVariables2,
  blockRouterMetaDataJsFunction1,
  EmptyValuesAndStringsMetaData,
  stringMethodsMetaData,
  ExerciseJsArrayBasicsMetaData,
  ObjectsBasicsMetaData,
  dateTimeMetaData,
  jsExtensionMetaData,
  jsSetTimeoutMetaData,
  jsSetIntervalMetaData,
  VanishStringMetaData,
  TimerMetaData,
  oopMetaData,
  TryCatchMetaData,
  TryCatchExerciseMetaData,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
