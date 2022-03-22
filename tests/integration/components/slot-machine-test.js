import { module, test} from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import { click } from '@ember/test-helpers';


module('Integration | Component | slot-machine', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<SlotMachine />`);

    let spinButton = this.element.querySelector('#spinButton');
    assert.dom(spinButton).hasText('Spin');

    await click(this.element.querySelector('#spinButton'));
  });
});
