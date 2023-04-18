import { useMediaDevices as ruUseMediaDevices } from 'react-use';

type UseMediaDevices = () => { devices?: MediaDeviceInfo[] };

export const useMediaDevices: UseMediaDevices = ruUseMediaDevices;
