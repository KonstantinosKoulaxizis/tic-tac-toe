import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import type { RootState, AppDispatch } from '../store/configureStore'

export const useReduxDispatch = () => useDispatch<AppDispatch>()
export const useReduxSelector: TypedUseSelectorHook<RootState> = useSelector
