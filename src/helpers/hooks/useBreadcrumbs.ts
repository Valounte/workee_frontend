/* eslint-disable */
import { FC, useMemo } from 'react';

import compact from 'lodash.compact';
import { matchPath, useLocation } from 'react-router';

type RoutesParams = Record<string, string> | undefined;

export interface BreadcrumbRenderProps {
  label: string;
  isActive: boolean;
  path: string;
}

interface Replace<Params> {
  pattern: string;
  getLabel: (params: Params) => string;
  Render: FC<BreadcrumbRenderProps>;
}

export interface UseBreadcrumbsProps<Params> {
  replaceOptions: Replace<Params>[];
}

/**
 * Each url pattern match with options to display it in breadcrumbs
 * this options provide a get label function, a render for breadcrumbs etc.
 * @param replaceOptions
 * @param pathToCrumb
 */
const getReplaceOptionsWhoMatchPattern = <T extends Replace<any>>(
  replaceOptions: T[],
  pathToCrumb: string
) => {
  const replaceOptionsIndex = replaceOptions.findIndex(route =>
    matchPath(route.pattern, pathToCrumb)
  );

  if (replaceOptionsIndex === -1) {
    throw Error(
      `No Replace found for ${pathToCrumb}. You need to provide a replace option for all breadcrumbs`
    );
  }

  return replaceOptions[replaceOptionsIndex];
};

/**
 * To display breadcrumb label we used replace options
 * search in url wich replace option to used
 * then invoque getLabel function to get the right label
 * @param replaceOptions
 * @param pathToCrumb
 */
const getBreadcrumbInfosWithReplacedLabel = <ReplaceOptions extends Replace<any>>(
  replaceOptions: ReplaceOptions,
  pathToCrumb: string
) => ({
  label: replaceOptions.getLabel(
    matchPath(replaceOptions.pattern, pathToCrumb)?.params
  ),
  ...replaceOptions,
});

export const useBreadcrumbs = <Params extends RoutesParams = undefined>(
  props: UseBreadcrumbsProps<Params>
) => {
  const { replaceOptions } = props;

  const { pathname } = useLocation();

  const breadcrumbsFromUrl = useMemo(
    () => pathname.split('/').filter((breadCrumb?: string) => breadCrumb),
    [pathname]
  );

  return useMemo(
    () =>
      compact(
        breadcrumbsFromUrl.map((breadcrumb, index) => {
          const pathToBreadcrumb = `/${breadcrumbsFromUrl
            .slice(0, index + 1)
            .join('/')}`;

          const replaceOptionsForThisBread = getReplaceOptionsWhoMatchPattern(
            replaceOptions,
            pathToBreadcrumb
          );

          const isLastBreadcrumb = index === breadcrumbsFromUrl.length - 1;

          return {
            path: pathToBreadcrumb,
            isActive: isLastBreadcrumb,
            ...getBreadcrumbInfosWithReplacedLabel<Replace<Params>>(
              replaceOptionsForThisBread,
              pathToBreadcrumb
            ),
          };
        })
      ),
    [breadcrumbsFromUrl, replaceOptions]
  );
};
