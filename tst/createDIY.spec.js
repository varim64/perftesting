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

test('create concrete sample', async ({ page }) => {
    const { NUM } = process.env;
    const today = formatDate(new Date());
    await page.goto('https://teamuesstage.agileframe.net/');
    await page.getByPlaceholder('Username').fill('MetaFieldDev');
    await page.getByPlaceholder('Password').fill('MetaField1');
    await page.getByPlaceholder('Password').press('Enter');
    await page.getByRole('link', { name: 'Field' }).click();
    await page.getByRole('button', { name: 'Sampling' }).click();
    try {
        await page.locator('#searchProjectButton').click();
        await page.getByLabel('Project Number').fill('9999');
        await page.getByLabel('Project Number').press('Enter');
        await page.getByRole('link', { name: '9999AF AgileFrameworks Test Project Jaramillo, Alex 3800 American Blvd, intersection of I-494 and France Avenue on the south east corner of the intersection Agile Frameworks' }).click();
    } catch (error) { }
    await page.getByRole('button', { name: 'Add Sample' }).click();
    await page.getByRole('link', { name: 'Concrete Field Testing and Sampling Freshly mixed concrete coming from mix truck at batch plant' }).click();
        await page.locator('div').filter({ hasText: /^Select One\.\.\.Select One\.\.\.Archer WesternKiewitOther$/ }).getByRole('button', { name: 'Select One...' }).click();
        await page.getByRole('link', { name: 'Archer Western' }).click();
        await page.locator('select[data-system-name="CGMSpecificationSampleType"]').selectOption('Cast Cylinder')
        await page.locator('select[data-system-name="Technician"]').selectOption('Client');
        await page.locator('input[data-system-name="SampleDate"]').fill(today);
        await page.locator('div[data-system-name="LocationDetails"]').click();
        await page.locator('div[data-system-name="LocationDetails"]').type('test');
        await page.getByRole('link', { name: 'Specimen Information' }).click();
        await page.locator('select[data-system-name="CGMSpecificationSpecimenSize"]').selectOption('Cylinder 3" x 6"');
        await page.locator('select[data-system-name="CastBy"]').selectOption('Client');
        await page.locator('input[data-system-name="TimeSampled"]').fill('11:00');
        await page.locator('input[data-system-name="TimeCast"]').fill('11:10');
        await page.locator('div[data-system-name="SampleLocationNotes"]').click();
        await page.locator('div[data-system-name="SampleLocationNotes"]').type('test');
        await page.getByRole('button', { name: 'Next' }).click();
    await page.locator('select[data-system-name="SpecimenSize"]').selectOption('Cylinder 3" x 6"');
    for (var i = 1; i < (NUM); i++) {
        await page.locator('button[data-role="add-record"] >> visible=true').nth(1).click();
        await page.locator(`select[data-system-name="SpecimenSize"][data-row="${i+1}"]`).selectOption('Cylinder 3" x 6"');
    }
        await page.getByRole('button', { name: 'Next' }).click();
        await page.locator('#btnSave').click();
        await page.getByRole('button', { name: 'Check-in Specimens' }).click();
        await page.locator('input[data-system-name="SampleDate"]').type(today);
        await page.getByRole('button', { name: 'Search' }).click();
        await page.waitForLoadState('networkidle');
        await page.waitForTimeout(5000);
        await page.getByText(`Logged(${NUM})`).click();
        await page.getByRole('button', { name: 'Continue' }).click();
        await page.locator('select[data-system-name="CheckedInBy"]').selectOption('97056');
        await page.locator('select[data-system-name="Lab"]').selectOption('IRVINE');
        await page.getByRole('button', { name: 'Save' }).click();
        await page.waitForTimeout(4000);
    await page.getByRole('button', { name: 'Home' }).click();
    await page.locator('#btnMetaFieldHome').click();
})

test('create activities', async ({ page }) => {
    const { NUM } = process.env;
    const today = formatDate(new Date());
    await page.goto('https://teamuesstage.agileframe.net/');
    await page.getByPlaceholder('Username').fill('MetaFieldDev');
    await page.getByPlaceholder('Password').fill('MetaField1');
    await page.getByPlaceholder('Password').press('Enter');
    await page.getByRole('link', { name: 'Field' }).click();
    await page.getByRole('button', { name: 'Activity' }).click();
    try {
        await page.locator('#searchProjectButton').click();
        await page.getByLabel('Project Number').fill('9999');
        await page.getByLabel('Project Number').press('Enter');
        await page.getByRole('link', { name: '9999AF AgileFrameworks Test Project Jaramillo, Alex 3800 American Blvd, intersection of I-494 and France Avenue on the south east corner of the intersection Agile Frameworks' }).click();
    } catch (error) { }
    await page.getByRole('button', { name: 'Add Activity' }).click();
    await page.getByRole('link', { name: 'ASTM Soils and Aggregate click to expand contents' }).click();
    await page.getByRole('link', { name: 'ASTM D6938 In-Place Density / Water Content (Shallow Depth) Procedures for measuring in-place density and moisture of soil and soil-aggregates by use of nuclear equipment' }).click();
    await page.locator('input[data-system-name="Date"]').fill(today);
    await page.locator('select[data-system-name="Technician"]').selectOption('Client');
    await page.getByRole('button', { name: 'Select One...' }).click();
    await page.getByText('Filter By Project').click();
    await page.getByRole('link', { name: 'Other', exact: true }).click();
    await page.locator('div[data-system-name="LocationDetails"]').click();
    await page.locator('div[data-system-name="LocationDetails"]').type('test');
    for (var i = 0; i < NUM; i++) {
        await page.getByRole('link', { name: 'Soil Nuclear Gauge Test' }).click();
        await page.locator('input[data-system-name="DensityCount"]').fill('1');
        await page.locator('input[data-system-name="MoistureCount"]').fill('1');
        await page.locator('select[data-system-name="ProbeDepth"]').selectOption('2 (in)');
        await page.getByRole('button', { name: 'Next' }).first().click();
        await page.locator('#btnSave').click();
        await page.getByText('Copy Last Activity').click();
    }
})
