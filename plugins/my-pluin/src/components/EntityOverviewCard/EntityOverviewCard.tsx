import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { Content, InfoCard } from '@backstage/core-components';
import { useEntity } from '@backstage/plugin-catalog-react';

export const EntityOverviewCard = () => {
    const { entity } = useEntity();

    return (
        <Content>
            <Grid container spacing={3} direction='column'>
                <Grid item>
                    <InfoCard title="Information card">
                        <Typography variant='body1'>
                            Hello From Prem
                            <br />
                            You are on Entity Page of {entity.metadata.name}
                        </Typography>
                    </InfoCard>
                </Grid>
            </Grid>
        </Content>
    );
}