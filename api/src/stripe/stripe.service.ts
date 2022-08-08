import { Injectable } from '@nestjs/common';
import Stripe from 'stripe';
import { Cart } from './Cart.model';

@Injectable()
export class StripeService {
  private stripe;

  constructor() {
    this.stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
      apiVersion: '2022-08-01',
    });
  }
}
