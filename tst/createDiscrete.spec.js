import { test, expect } from '@playwright/test';

function formatDate(date) {
	const day = date.getDate();
	const month = date.getMonth() + 1;
	const year = date.getFullYear();
	const dayString = day.toString().padStart(2, '0');
	const monthString = month.toString().padStart(2, '0');
	const yearString = year.toString();
	return (`${monthString}/${dayString}/${yearString}`);
}

test('create cast cylinder', async ({ page }) => {
  const { NUM } = process.env;
  const today = formatDate(new Date());
  await page.goto('https://braunstage.agileframe.net/');
  await page.getByPlaceholder('Username').fill('rcode');
  await page.getByPlaceholder('Password').fill('HbmLma3od9r7');
  await page.getByPlaceholder('Password').press('Enter');
  await page.getByRole('link', { name: 'Field' }).click();
  await page.getByRole('button', { name: 'Sampling' }).click();
  await page.locator('#searchProjectButton').click();
  await page.getByLabel('Project Number').fill('9999');
  await page.getByRole('button', { name: 'Search' }).click();
  await page.getByRole('link', { name: '9999AF Agile Frameworks Test Project-Test Smolarek, Joel 123 Anywhere Street Agile Frameworks, LLC' }).click();
  for (var i = 0; i < (NUM / 5); i++) {
    await page.locator('#selectDiscreteSample').click();
    await page.getByRole('link', { name: 'Cast Cylinder' }).click();
    await page.getByLabel('* Date Logged / Cast').fill(today);
    await page.getByLabel('* Location Details').fill('test');
    await page.getByRole('button', { name: 'Lookup' }).click();
    await page.getByRole('link', { name: 'Bridge - Abutment' }).click();
    await page.getByRole('button', { name: 'Specifications' }).click();
    await page.getByRole('button', { name: 'Next' }).click();
    await page.getByRole('button', { name: 'Next' }).click();
    await page.getByRole('combobox', { name: '* Specimen Size' }).selectOption('801');
    await page.locator('select[id="Specimens_CastByID"]').selectOption('Client');
    await page.getByLabel('Time Sampled (CDT)').fill('11:00');
    await page.getByLabel('Time Cast (CDT)').fill('11:10');
    await page.getByLabel('Sample Location / Notes').fill('test');
    await page.getByRole('button', { name: 'Next' }).click();
    await page.getByRole('button', { name: 'Finish' }).click();
    await page.getByRole('button', { name: 'Save', exact: true }).click();
    await page.getByRole('button', { name: 'Manage Specimens' }).click();
    await page.getByLabel('Date Sampled').type(today);
    await page.getByLabel('Date Sampled').press('Enter');
    await page.getByText('5 specimens Logged (5) Code, Rain').first().click();
    await page.getByRole('button', { name: 'Continue' }).click();
    await page.getByRole('combobox', { name: '* Lab' }).selectOption('284');
    await page.getByLabel('* Check-in Date').fill(today);
    await page.getByRole('button', { name: 'Save' }).click();
    try {
      await page.getByRole('button', { name: 'Save' }).click({ timeout: 2000 });
    } catch (error) { }
    await page.getByRole('button', { name: 'Yes' }).click();
    await page.waitForTimeout(4000);
  }
  await page.getByRole('button', { name: 'Home' }).click();
  await page.locator('#btnMetaFieldHome').click();
});

// Thie test requires you to have standardized a Nuclear Gauge beforehand
test('Create Density Tests', async ({ page }) => {
  const { NUM } = process.env;
  const today = formatDate(new Date());
  await page.goto('https://braunstage.agileframe.net/');
  await page.getByPlaceholder('Username').fill('rcode');
  await page.getByPlaceholder('Password').fill('HbmLma3od9r7');
  await page.getByPlaceholder('Password').press('Enter');
  await page.getByRole('link', { name: 'Field' }).click();
  await page.getByRole('button', { name: 'Density Testing' }).click();
  await page.getByRole('link', { name: 'Search Projects' }).click();
  await page.getByLabel('Project Number').click();
  await page.getByLabel('Project Number').fill('9999');
  await page.getByLabel('Project Number').press('Enter');
  await page.locator('a').filter({ hasText: '9999AF Agile Frameworks Test Project-Test Smolarek, Joel 123 Anywhere Street Agi' }).click();
  await page.getByRole('button', { name: 'Create New Test' }).click();
  await page.getByRole('link', { name: 'Soil Nuclear Gauge' }).click();
  for (var i = 0; i < NUM; i++) {
    await page.getByRole('button', { name: 'Lookup' }).click();
    try {
      await page.getByText('Filter By Project').click({ timeout: 5000 });
      await page.reload();
      await page.locator('#searchLocations').type('Bridge');
    } catch (error) { }
    await page.getByRole('link', { name: 'Bridge -', exact: true }).click();
    await page.getByLabel('* Date Tested').fill(today);
    await page.getByLabel('* Location Details').click();
    await page.getByLabel('* Location Details').fill('test');
    await page.getByRole('button', { name: 'Specifications' }).click();
    await page.getByRole('combobox', { name: '* Proctor' }).selectOption('350896');
    await page.getByLabel('* Minimum Specified Compaction (%)').fill('5');
    await page.getByRole('button', { name: 'Next' }).click();
    await page.getByRole('combobox', { name: '* Probe Depth (in)' }).selectOption('18418');
    await page.getByLabel('* Wet Density (pcf)').fill('1');
    await page.getByLabel('* Weight of Water (pcf)').fill('0');
    await page.getByRole('button', { name: 'Next' }).click();
    await page.getByRole('button', { name: 'Next' }).click();
    await page.getByRole('button', { name: 'Finish' }).click();
    await page.getByRole('button', { name: 'Save Test' }).click();
    await page.getByRole('button', { name: 'OK', exact: true }).click();
    await page.getByRole('button', { name: 'Copy Last Test' }).click();
  }
});