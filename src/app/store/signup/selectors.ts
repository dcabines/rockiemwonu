import { createFeatureSelector, createSelector } from "@ngrx/store";
import { SignupState } from "./models/signup-state";

export const getSignupState = createFeatureSelector<SignupState>('signup');

export const getDialogOpen = createSelector(
  getSignupState,
  state => state.dialogOpen
);
