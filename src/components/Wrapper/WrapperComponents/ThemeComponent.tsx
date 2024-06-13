import React, {ReactNode} from 'react';
import {ThemeContextComponent} from '@/components/Wrapper/WrapperComponents/ThemeContextComponent';
import ThemeProviderComponent from '@/components/Wrapper/WrapperComponents/ThemeProviderComponent';
import {ThemeLayoutComponent} from '@/components/Wrapper/WrapperComponents/ThemeLayoutComponent';

export const DEFAULT_BODY_CLASSNAME = `g-root g-root_theme_dark`;

export function ThemeComponent({children}: {children: ReactNode}) {
    return (
        <ThemeContextComponent>
            <ThemeProviderComponent>
                <ThemeLayoutComponent>{children}</ThemeLayoutComponent>
            </ThemeProviderComponent>
        </ThemeContextComponent>
    );
}
