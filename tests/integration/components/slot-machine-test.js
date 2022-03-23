import { module, test} from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { click, render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';


module('Integration | Component | slot-machine', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<SlotMachine />`);

    assert.dom('h1').exists();

    let header = this.element.querySelector('#header');
    assert.dom(header).exists();
    assert.dom(header).hasText('Play the slot machine');

    let spinButton = this.element.querySelector('#spinButton');
    assert.dom(spinButton).exists();
    assert.dom(spinButton).hasText('Spin');

    let moneyAmount = this.element.querySelector('#moneyAmount');
    assert.dom(header).exists();

    let playAgainButton = this.element.querySelector('#playAgainButton');
    assert.dom(playAgainButton).exists();
    assert.dom(playAgainButton).hasAttribute('type');

  })
});
