import { Component } from '@angular/core';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-pizza-items',
  templateUrl: './pizza-items.component.html',
  styleUrls: ['./pizza-items.component.sass']
})
export class PizzaItemsComponent {
  products: Product[] = [
    {
      title: 'Мясная Делюкс',
      description: 'Пепперони, лук, бекон, томатная паста, колбаски, перец, грибы, соус чили, ананасы',
      url: '../../../../assets/images/pizza_1.png',
    },
    {
      title: 'Морская Премиум',
      description: 'Перец, сыр, креветки, кальмары, мидии, лосось',
      url: '../../../../assets/images/pizza_2.png',
    },
    {
      title: 'Бекон и Сосиски',
      description: 'Бекон, сыр, сосиски, ананас, томатная паста',
      url: '../../../../assets/images/pizza_3.png'
    },
    {
      title: 'Куриная Делюкс',
      description: 'Курица, ананас, сыр Пепперони, соус для пиццы, томатная паста',
      url: '../../../../assets/images/pizza_4.png'
    },
    {
      title: 'Барбекю Премиум',
      description: 'Свинина BBQ, соус Барбкею, сыр, курица, соус для пиццы, соус чили',
      url: '../../../../assets/images/pizza_5.png'
    },
    {
      title: 'Пепперони Дабл',
      description: 'Пепперони, сыр, колбаса 2 видов: обжаренная и вареная',
      url: '../../../../assets/images/pizza_6.png'
    },
    {
      title: 'Куриное трио',
      description: 'Жареная курица, Тушеная курица, Куриные наггетсы, перец, сыр, грибы, соус для пиццы',
      url: '../../../../assets/images/pizza_7.png'
    },
    {
      title: 'Сырная',
      description: 'Сыр Джюгас, Сыр с плесенью, Сыр Моцарелла, Сыр секретный',
      url: '../../../../assets/images/pizza_8.png'
    },
  ];
}
