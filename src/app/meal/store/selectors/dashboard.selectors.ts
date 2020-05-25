import { createSelector } from '@ngrx/store';
import { getMeal, MealState } from '../meal.state';
import { DashboardState } from '../reducers/dashboard.reducers';
import { Statistics } from '@app/core';

export const getDashboard = createSelector(getMeal, (state: MealState) => state.dashboard);
export const getErrorMessage = createSelector(getDashboard, (state: DashboardState) => state.errorMessage);
export const getStatistics = createSelector(getDashboard, (state: DashboardState) => state.statistics);

export const getChartDatasets = createSelector(getStatistics, (statistics: Statistics) => statistics ?
    [{
        data: [statistics.protein, statistics.fats, statistics.carbs],
        label: 'Average intake:',
    }] :
    [{
        data: [],
        label: ''
    }]);

export const getChartOptions = createSelector(getStatistics, (statistics: Statistics) => statistics ? {
    responsive: true,
    scales: {
        yAxes: [{ id: 'y-axis-1', type: 'linear', position: 'left', ticks: { min: 0, max: statistics.upperLimit } }]
    }
} : undefined);